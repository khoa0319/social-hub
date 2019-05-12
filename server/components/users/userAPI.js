/* 3rd party modules */
const express = require('express');
const router = express.Router();
/* app modules */
const _userHandle = require('./userHandle');
const _middlware = require('./userMiddleware');

/*  auth actions */

router.get('/detail',
  _middlware.authenticating,
  _userHandle.handleDetail);

// update account
router.post('/update',
  _middlware.validateUpdateInput,
  _middlware.authenticating,
  _userHandle.handleUpdate);

router.post('/joinyc',
  _middlware.validateJoinYCInput,
  _middlware.authenticating,
  _userHandle.handleJoinYoungCommunist);

router.post('/joinstdc',
  _middlware.authenticating,
  _userHandle.handleJoinStudentCommunity);

/* un-auth actions */

// first time update account
router.post('/updateInfo', 
  _userHandle.handleUpdateFirstTime)

router.post('/activate', 
  _middlware.validateRegisterInput,
  _userHandle.handleActivate);

router.post('/login', 
  _userHandle.handleLogIn);

router.post('/resetpwd',
  _middlware.validateUpdatePasswordInput,
  _userHandle.handleResetPassword);

module.exports = router;