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
