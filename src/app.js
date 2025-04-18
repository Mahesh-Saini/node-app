import http from "node:http";

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Working");
});

server.on("error", (err) => {
  console.log(`Something happed wrong!\n${err}`);
});

server.listen(5555, "127.0.0.1", () => {
  console.log("Server running on port 5555");
});
