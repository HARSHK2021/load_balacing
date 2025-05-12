const http = require('http');
const httpProxy = require('http-proxy');
const HashRing = require('hashring');

const servers = {
  'server1': 'http://localhost:3001',
  'server2': 'http://localhost:3002',
  'server3': 'http://localhost:3003'
};

const ring = new HashRing(Object.keys(servers));
const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  // Use request IP or URL path as the key
  const key = req.connection.remoteAddress || req.url;

  const serverId = ring.get(key); // Choose server based on hash
  const target = servers[serverId];

  console.log(`Consistent hash key: ${key} → Redirecting to ${target}`);
  proxy.web(req, res, { target });
});

server.listen(8000, () => {
  console.log('Consistent Hash Load Balancer running on http://localhost:8000');
});
