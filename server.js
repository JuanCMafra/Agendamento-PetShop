const path = require('path');

console.log('server.js starting');
console.log('Node version:', process.version);

let jsonServer;
try {
  jsonServer = require('json-server');
} catch (err) {
  console.error('json-server is not installed or could not be required.');
  console.error('Error:', err && err.stack ? err.stack : err);
  console.error('If you see this during deploy, ensure `json-server` is listed in `dependencies` in package.json and that `npm install` ran successfully.');
  process.exit(1);
}

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'server.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Allow CORS for demo usage
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.use(jsonServer.bodyParser);
server.use(router);

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
