/* 3rd party modules */
const express = require('express');
const router = express.Router();
const _adminHandle =require('./adminHandle')
const _adminMiddleware=require('./adminMiddleware')
router.post('/login',_adminHandle.handleLogin);
router.post('/register',_adminMiddleware.validateRegister,_adminHandle.handleRegister)
router.get('/studentlist/count', _adminHandle.handleCountStudentList)
router.get('/studentlist',_adminHandle.handleStudentList)
router.post('/resetStudent',_adminHandle.handleResetStudent)
router.get('/activitystudent',_adminHandle.handleStudentActivity)
router.post('/checkinstudent',_adminHandle.handleRegisterStudentActivity)
router.get('/studentcommunity',_adminHandle.handleStudentJoinCommunity)
router.post('/acceptstudent',_adminHandle.handleRegisterStudentCommunity)
router.post('/rejectstudent',_adminHandle.handleRejectStudentCommunity)
router.post('/acceptstudentyc',_adminHandle.handleAcceptYouthCommunity)
router.post('/rejectstudentyc',_adminHandle.handleRejectYouthCommunity)
router.get('/getyclist',_adminHandle.handleListYouthCommunity)
router.get('/getclass',_adminHandle.handleClass)
module.exports = router;