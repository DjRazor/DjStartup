const { WebSocketServer } = require('ws');
const express = require('express');
const app = express();
const DB = require('./database.js');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const authCookieName = 'token';

// The service port may be set on the command line
const port = process.argv.length > 2 ? process.argv[2] : 3000;
server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Websocket Object
const wss = new WebSocketServer({ noServer: true });

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

let userList = [];

// **WEBSOCKET CODE**
// Handle the protocol upgrade from HTTP to WebSocket
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});

// Keep track of all the connections so we can forward messages
let connections = [];

wss.on('connection', (ws) => {
  const connection = { id: connections.length + 1, alive: true, ws: ws };
  connections.push(connection);

  // Forward messages to everyone except the sender
  ws.on('message', function message(data) {
    connections.forEach((c) => {
      if (c.id !== connection.id) {
        c.ws.send(data);
      }
    });
  });

  // Remove the closed connection so we don't try to forward anymore
  ws.on('close', () => {
    connections.findIndex((o, i) => {
      if (o.id === connection.id) {
        connections.splice(i, 1);
        return true;
      }
    });
  });

  // Respond to pong messages by marking the connection alive
  ws.on('pong', () => {
    connection.alive = true;
  });
});

// Keep active connections alive
setInterval(() => {
  connections.forEach((c) => {
    // Kill any connection that didn't respond to the ping last time
    if (!c.alive) {
      c.ws.terminate();
    } else {
      c.alive = false;
      c.ws.ping();
    }
  });
}, 10000);


// **POTENTIAL LOGIN CODE**
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing username' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized: wrong password or username.' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetUser returns information about a user
apiRouter.get('/user/:email', async (req, res) => {
  const user = await DB.getUser(req.params.email);
  if (user) {
    const token = req?.cookies.token;
    res.send({ email: user.email, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized here' });
  }
});






apiRouter.get('/data', (_req, res) => {
    res.json(userList);
});

apiRouter.post('/store', (req, res) => {
    const userInput = req.body;

    if (!userInput || !userInput.data) {
        return res.status(400).json({ error: 'Data is missing in the request.', message: 'Data is missing in the request.' });
    }

    userList.push(userInput);
    res.json({ message: 'Data stored successfully.' });

});



apiRouter.post('/messages', (req, res) => {
  const userMessage = req.body;
  if (!userMessage.email && !userMessage.message) {
    return res.status(400).json({ message: 'Email and message are missing.' });
  }
  if (!userMessage.email) {
    return res.status(400).json({ message: 'Email is missing from the request. Please add your email.' });
  }
  if (!userMessage.message) {
    return res.status(400).json({ message: 'Message is missing. Please add a message.' });
  }
  res.json({ message: 'Data sent sucessfully.' });
  DB.addMessage(userMessage);
  
});



app.use('/users', (_req, res) => {
    res.sendFile('profile.html', { root: 'public'});
  });

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});
  // Return the application's default page if the path is unknown
  app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

  apiRouter.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' })
  })

// SET AUTH COOKIE in HTTP RESPONSE
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
  
  



  
  