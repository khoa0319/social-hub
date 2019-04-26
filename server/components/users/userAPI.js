/* 3rd party modules */
const express = require('express');
const router = express.Router();

/* app modules */
const _userData = require('./userDAL');

/*  auth actions */

// get dashboard

router.get('/:id', (req, res) => {
  res.status(200).json({msg: `hello ${req.params['id']}`});
})

router.get('/:id/detail', _userData.handleDetail);



// router.get('/account', _userData.handleAccount);

// router.get('/logout', _userData.handleLogOut);

// update account
router.post('/update', _userData.handleUpdate);

// router.post('/join-yc', _userData.handleJoinYoungCommunist);

// router.post('/join-stdc', _userData.handleJoinStudentCommunity);

/* un-auth actions */

router.post('/activate', _userData.handleActivate);

router.post('/login', _userData.handleLogIn);

//router.post('/reset', _userData.handleReset);

module.exports = router;