/* 3rd party modules */
const express = require('express');
/* App modules */
const config = require('./config/config');
const seedData = require('./models/seedData');

/* init data */
//seedData.init();

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/users', require('./components/users/userAPI'));
const port = config.port || 5000;


app.listen(port, () => {
  console.log(`Listening on port ${port} in ${config.envName}`);
})