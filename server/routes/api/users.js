/* 3rd party modules */
const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
  res.status(200).json({
    'message': `hello ${req.params['id']}`
  });
  res.end();
});

router.get('/:id/detail', (req, res) => {
  
});

router.post('/register', (req, res) => {
  const { ID } = req.body;
  res.status(200).json({
    "ID": `${ID}`
  })
  res.end();
});

module.exports = router;