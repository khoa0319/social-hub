/* 3rd party modules */
const express = require('express');
const router = express.Router();

/* App modules */
const _middleware = require('../users/userMiddleware')
const _activities = require('./activityHandle')
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

// @TODO: authorize	
router.get('/all',
	_middleware.authenticating,
	_activities.handleGetAllActivities)

/* get new activities */
router.get('/', 
	_activities.handleGetActivities)

/* get detail activity */
router.get('/:id')

/* Pariticipate Activity */
router.post('/joinactivity',
	_activities.handleJoinActivity)

module.exports = router;