// HTTP global module
const http = require("http");
// Function exported in module.exports
const { routes } = require("./routes");

// Runs given function for every request to http server. It also parses req and res params through shorthanded syntax
const server = http.createServer(routes);

server.listen(3000);
