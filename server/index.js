/* App Initialize */
require('dotenv').config();
require('./spawnDatabase');

/* 3rd party modules */
const express = require('express');

/* App modules */
const worker = require('./components/workers/workers');

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/users', require('./components/users/userAPI'));
const port = process.env.PORT || 5000;
const environment = process.env.NODE_ENV
app.listen(port, () => {
  console.log(`Listening on port ${port} in ${environment}`);
});

worker.init();