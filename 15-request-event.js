const http = require("http");

// how we used to do it
// const server = http.createServer((req, res) => {
//   res.end("welcome");
// });

// using event emitter api
const server = http.createServer();

// subscribe to it/listen to it/ respond to it
server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(5000);
