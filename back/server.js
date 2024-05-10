const http = require('http');
const app = require('./app');
const Sequelize = require('sequelize');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, './db/config.js'))[env];
const fs = require('fs');
let models = {
  // user: User,
  // blog: Blog
};
const modelsFolderPath = './db/models';


// const db = require(path.join(__dirname, './db'));
// db.authenticate()
//   .then(() => {
 
//   })
//   .catch(console.error);
 
const sequelize = new Sequelize(
   `postgres://${config.username}:${config.password}@${config.host}/${config.database}`, config);
 
  fs
   .readdirSync(path.join(__dirname, modelsFolderPath))
   .forEach(file => {
     let model = require(path.join(__dirname, modelsFolderPath, file));
     models[model.name] = model;
   });
  
 Object.keys(models).forEach(modelName => {
   if (models[modelName].associate) {
     models[modelName].associate(models);
   }
 });
  
sequelize.models = models;

module.exports = sequelize;

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port, () => 
    console.log('server is running on 3000'));
