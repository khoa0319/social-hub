/* 3rd party modules */
const express = require('express');
const router = express.Router();
const passport = require('passport');
/* app modules */
const _userHandle = require('./userHandle');
const _middlware = require('./userMiddleware');
/*  auth actions */

// get dashboard

router.get('/detail',
  passport.authenticate("jwt", { session: false }),
  _userHandle.handleDetail);

// router.get('/account', _userHandle.handleAccount);

// update account
router.post('/update',
  _middlware.validateUpdateInput,
  passport.authenticate('jwt', { session: false }),
  _userHandle.handleUpdate);

router.post('/joinyc',
  passport.authenticate('jwt', { session: false }), 
  _userHandle.handleJoinYoungCommunist);

router.post('/joinstdc',
  passport.authenticate('jwt', { session: false }),
  _userHandle.handleJoinStudentCommunity);

/* un-auth actions */
router.get('/:id', (req, res) => {
  res.status(200).json({ msg: `hello ${req.params['id']}` });
})
router.post('/activate', 
  _middlware.validateRegisterInput, 
  _userHandle.handleActivate);

router.post('/login', _userHandle.handleLogIn);

router.post('/resetpwd',
  _middlware.validateUpdatePasswordInput,
  passport.authenticate('jwt', { session: false }),
  _userHandle.handleResetPassword);

module.exports = router;