const http = require("http");

const PORT = 3000;

const server = http.createServer((request, response) => {
  console.log(`[${new Date().toISOString()}] ${request.method} ${request.url}`);

  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.setHeader("X-Powered-By", "Node.js");

  response.write("<h1>Node.js HTTP Server</h1>");
  response.write("<p>Server is running successfully.</p>");
  response.write(`<p>Requested URL: ${request.url}</p>`);
  response.end("<p>Response sent using write() and end().</p>");
});

server.listen(PORT, () => {
  console.log(`Server started successfully.`);
  console.log(`Open this URL in your browser: http://localhost:${PORT}`);
});
