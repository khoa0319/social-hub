/* 3rd party modules */
const express = require('express');
const router = express.Router();
const passport = require('passport');

/*
	Activity API
	User: GET activities, notis
				POST: join-activities
	Admin: CRUD activities, notis, users in activities
 */

 /*
	get all participated activities of the users
  */
router.get('/all')

/* get new activities */
router.get('/new')
/* get detail activity */
router.get('/:id')