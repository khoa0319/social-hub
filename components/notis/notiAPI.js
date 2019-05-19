/* 3rd party modules */
const express = require('express');
const router = express.Router();

/* App modules */
const _middleware = require('../users/userMiddleware')
const _notis = require('../notis/notiHandle')
/*
	Activity API
	User: GET activities, notis
				POST: join-activities
	no real time?
	check the activities that was made when?

	Admin: CRUD activities, notis, users in activities
 */

 /*
	get all participated activities of the users
  */

router.get('/',
	_middleware.authenticating,
	_notis.handleGetNotis
)

router.get('/count',
	_middleware.authenticating,
	_notis.handleGetAllNotis)

module.exports = router;