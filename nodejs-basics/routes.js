// Filesystem global module
const fs = require("fs");

// req.url, req.method and req.headers are the most important atributes from the http request
const handleRequests = (req, res) => {
  // Browsers only know a limited set of headers and values: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>First NodeJS Assignment</title><head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1>");
    res.write("<h2>Enter Username</h2>");
    // name attribute is important to the server request
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/create-user" && req.method === "POST") {
    const body = [];
    // Executed when new chunk is received by server. Manually gets all the data sent alongside within the POST request
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    // Executed when all chunks are done. This will be executed AFTER NodeJS finishes parsing the request. IT IS IMPORTANT TO RETURN THE RESULT OF THE FINAL req.on call
    return req.on("end", () => {
      // Manually parses all chunks raw content
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];

      console.log({ username });

      res.setHeader("Location", "/");
      res.statusCode = 302;
      return res.end();
    });
  }

  if (req.url === "/users" && req.method === "GET") {
    res.write("<html>");
    res.write("<head><title>User List</title><head>");
    res.write("<body><h1>Registered users</h1>");
    res.write("<ul><li>User 1</li>");
    res.write("<li>User 2</li>");
    res.write("<li>User 3</li>");
    res.write("<li>User 4</li>");
    res.write("<li>User 5</li></ul>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Location", "https://http.cat/404");
  res.statusCode = 301;

  // Ends the event loop (not used often in real environments)
  // process.exit();

  // Tells browser that server finished writing onto it
  res.end();
};

// Shortcut so we can export several values through an exported JS object
exports.routes = handleRequests;
