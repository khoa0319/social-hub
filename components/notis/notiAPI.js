/* 3rd party modules */
const express = require('express');
const router = express.Router();

/* App modules */
const _middleware = require('../users/userMiddleware')

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

router.get('/', (req, res) => {
  res.status(200).json({q: 'success'});
})

module.exports = router;