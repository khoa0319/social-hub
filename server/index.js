/* App Initialize */
require('dotenv').config();
require('./spawnDatabase');

/* 3rd party modules */
const express = require('express');
const passport = require('passport');
/* App modules */
const worker = require('./components/workers/workers');

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
})
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
require('./config/passport')(passport);
// ROUTES
app.use('/api/users', require('./components/users/userAPI'));
// app.use('/api/admins', require('./components/admins/adminAPI'));
const port = process.env.PORT || 5000;
const environment = process.env.NODE_ENV
app.listen(port, () => {
  console.log(`Listening on port ${port} in ${environment}`);
});

worker.init();