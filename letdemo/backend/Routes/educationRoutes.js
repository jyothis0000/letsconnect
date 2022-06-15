const express=require('express')
const router=express.Router()
const Education = require('../Controllers/educationController')

router.post('/addEducation',Education.addEducation)
router.get('/getEducation',Education.getAllEducation)
router.post('/getUser',Education.getUser)


module.exports=router