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
- 
2. What do HTTP status codes in the 300, 400, 500 range indicate?
- 
3. What does the HTTP header content-type allows you to do?
- 
4. What do the following attributes of a cookie do?
- Domain: 
- Path: 
- SameSite: 
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
-
9. Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?
-
10. What is the WebSocket protocol used for?
-
11. What is JSX and how are the curly braces rendered?
-
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
13. Assuming a HTML document with a 
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
-
16. What is the useEffect hook used for?
-
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
-
19. What does package.json do in a npm project?
-
20. What does the fetch function do?
-
21. What does node.js do?
-
22. What does Vite do?
-
