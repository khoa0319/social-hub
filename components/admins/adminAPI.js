/* 3rd party modules */
const express = require('express');
const router = express.Router();
const _adminHandle =require('./adminHandle')
const _adminMiddleware=require('./adminMiddleware')
router.post('/login',_adminHandle.handleLogin);
router.post('/register',_adminMiddleware.validateRegister,_adminHandle.handleRegister)
router.get('/studentlist',_adminHandle.handleStudentList)
router.post('/resetStudent',_adminHandle.handleResetStudent)
router.get('/activitystudent',_adminHandle.handleStudentActivity)
router.post('/checkinstudent',_adminHandle.handleRegisterStudentActivity)
router.get('/studentcommunity',_adminHandle.handleStudentJoinCommunity)
router.post('/acceptstudent',_adminHandle.handleRegisterStudentCommunity)
router.post('/rejectstudent',_adminHandle.handleRegisterStudentCommunity)

module.exports = router;