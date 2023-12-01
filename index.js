const express = require('express');
const app = express();
const DB = require('./database.js');

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

let userList = [];

apiRouter.get('/data', (_req, res) => {
    res.json(userList);
});

apiRouter.post('/store', (req, res) => {
    const userInput = req.body;

    if (!userInput || !userInput.data) {
        return res.status(400).json({ error: 'Data is missing in the request.' });
    }

    userList.push(userInput);
    res.json({ message: 'Data stored successfully.' });

});

apiRouter.post('/save', (req, res) => {
  const userMessage = req.body;
  if (!userMessage.email) {
    return res.status(400).json({ error: 'Email is missing from the request. Please add your email.' });
  }
  if (!userMessage.message) {
    return res.status(400).json({ error: 'Message is missing. Please add a message.' });
  }
  DB.addMessage(req.body);
});

app.use('/users', (_req, res) => {
    res.sendFile('profile.html', { root: 'public'});
  });


  // Return the application's default page if the path is unknown
  app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

  apiRouter.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' })
  })
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  