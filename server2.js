const http = require('http');
const PORT = 3002;

http.createServer((req, res) => {
  res.end('Handled by Server 2');
}).listen(PORT, () => {
  console.log(`Server 2 running at http://localhost:${PORT}`);
});
