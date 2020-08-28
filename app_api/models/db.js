const mongoose = require('mongoose');

let dbURI = 'mongodb://localhost/Afriteach';
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MLAB_URI;
}
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});

const readLine = require('readline');


mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error: ', err);
});


mongoose.connection.on('error', () => {
  console.log('Mongoose disconnected.');
});

// Deal with windows 
if (process.platform === 'win32') {
  const rl =  readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('SIGINT', () => {
    process.emit("SIGINT");
  });
}

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
}
// nodemon restarts
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// App termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

require('./courses');
require('./users');