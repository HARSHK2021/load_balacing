const http = require('http');
const PORT = 3003;

http.createServer((req, res) => {
  res.end('Handled by Server 3');
}).listen(PORT, () => {
  console.log(`Server 3 running at http://localhost:${PORT}`);
});
