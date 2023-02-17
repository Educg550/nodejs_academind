// HTTP global module
const http = require("http");
// Filesystem global module
const fs = require("fs");

// Runs given function for every request to http server
const server = http.createServer((req, res) => {
  // req.url, req.method and req.headers are the most important atributes from the http request

  // Browsers only know a limited set of headers and values: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    // name attribute is important to the server request
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    // Executed when new chunk is received by server
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    // Executed when all chunks are done
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync(".cache/data.txt", message);
    });
    // 302: Temporarily moved
    res.statusCode = 302;
    // Redirect by setting header location
    res.setHeader("Location", "/");
    return res.end();
  }

  // Ends the event loop (not used often in real environments)
  // process.exit();

  // Tells browser that server finished writing onto it
  res.end();
});

server.listen(3000);
