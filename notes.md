### HOW TO FETCH API:
HTML:
<pre></pre>

CSS:
pre {
  font-size: 2em;
}

JS:
const url = "https://api.quotable.io/random";
fetch(url)
  .then((x) => x.json())
  .then((response) => {
    document.querySelector("pre").textContent = JSON.stringify(
      response,
      null,
      "  "
    );
  });

### Final Exam Notes:
1. What ports are used for HTTP, HTTPS, SSH?
- HTTP: 80
- HTTPS: 443
- SSH: 22 (can be changed)
2. What do HTTP status codes in the 300, 400, 500 range indicate?
- 300: Redirection
- 400: Client errors
- 500: Server errors
3. What does the HTTP header content-type allows you to do?
- To indicate the media type or MIME (Multipurpose Internet Mail Extensions) type of the resource being sent in the HTTP message. It specifies the type of data that is actually sent in the body of the request or response, allowing the receiving application to correctly interpret and process the content. 
  - text/html: HTML content
  - application/json: JSON data
4. What do the following attributes of a cookie do?
- Domain: Specifies the domain for which the cookie is valid. The browser sends the cookie only to the specified domain and its subdomains.  
- Path: Defines the subset of URLs on the domain for which the cookie is valid. The cookie is sent only to requests that match the specified path.
Example: If a cookie is set with the path /products, it is valid for URLs like example.com/products/item1 but not for URLs like example.com/about
- SameSite: Controls when the browser includes cookies in a request. It is a security measure to mitigate cross-site request forgery (CSRF) attacks.
- HTTPOnly: 
5. Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /foo/bar?
- 
6. Given the following Express service code: What does the following JavaScript fetch return?
-
7. Given the following MongoDB query

{ cost: { $gt: 10 }, name: /fran.*/}
select all of the matching documents.
-
8. How should you store user passwords in a database?
- Encrypted (not plain text)
- Adding a salt would be good too
9. Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?
-
10. What is the WebSocket protocol used for?
- Communication channels over a single, long-lived TCP connection
11. What is JSX and how are the curly braces rendered?
- It allows you to write HTML elements and components in a syntax that looks similar to XML or HTML within your JavaScript code
12. Assuming a HTML document with a 
<div id="root"></div>
element, what content will the following React component generate?
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      function App() {
        return (
          <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
          </div>
        );
      }
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);
-
13. Assuming an HTML document with a 
<div id="root"></div>
element, what content will the following React component generate?
    function Numbers() { 
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>)
    }
    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(<Numbers/>);
-
14. What does the following React component do?
function Example() {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
-
15. What are React Hooks used for?
- React hooks are functions that enable functional components in React to use state and lifecycle features that were previously available only in class components
16. What is the useEffect hook used for?
- Enables performing side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM
17. What does this code do?
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
-
18. What role does npm play in web development?
- Provides a centralized repository for JavaScript packages and tools. It is the default package manager for Node.js
19. What does package.json do in a npm project?
- Serves as a central configuration file that provides information about the project, its dependencies, and various scripts or commands associated with the project
20. What does the fetch function do?
- Fetching URL's for API's
21. What does node.js do?
- Runtime environment for executing JavaScript code on the server side
22. What does Vite do?
- Vite is a build tool and development server designed for modern web development. It is specifically tailored for building frontend applications using modern JavaScript frameworks (React)
