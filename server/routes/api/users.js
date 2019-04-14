/* 3rd party modules */
const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
  res.status(200).json({
    'message': `hello ${req.params['id']}`
  });
  res.end();
})

router.post('/register', (req, res) => {
  
});

module.exports = router;