// server1.js
const http = require('http');
const PORT = 3001;

http.createServer((req, res) => {
  res.end('Handled by Server 1');
}).listen(PORT, () => {
  console.log(`Server 1 running at http://localhost:${PORT}`);
});
