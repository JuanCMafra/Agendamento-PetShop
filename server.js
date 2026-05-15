const jsonServer = require('json-server');
const path = require('path');

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
