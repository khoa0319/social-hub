/* 3rd party modules */
const express = require('express');

/* app modules */
const config = require('./config/config');

const app = express();

const port = config.port || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port} in ${config.envName}`);
})