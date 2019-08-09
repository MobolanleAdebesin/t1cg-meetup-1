const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002;
const app = express();

//security: https://www.npmjs.com/package/helmet - need to be the first of middleware stack
app.use(
  helmet({
    noCache: true,
    permittedCrossDomainPolicies: true
  })
);

switch (app.get('env')) {
  //if the host environment is in production, use files from client/build
  case 'production':
    app.use(express.static('client/build'));
    break;

  //if development, use middleware morgan in development
  case 'development':
    app.use(logger('dev'));
    break;

  //if neither, follow production
  default:
    app.use(express.static('client/build'));
    break;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//using the routes
app.use(require('./routes'));

//database connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/t1cgmeetup',
  {
    useCreateIndex: true,
    useNewUrlParser: true
  },
  err => {
    if (err) throw err;
    console.log('Database is online & connected');
  }
);

//make the server listen for requests
app.listen(PORT, function() {
  console.log(`Express API Server is up & running`);
});
