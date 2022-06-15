const express=require('express')
const router=express.Router()
const Experience = require('../Controllers/ExperienceController/experienceController')

router.post('/addExperience',Experience.addExperience)
router.post('/getuserExperience',Experience.getUserExperience)
router.delete('/deleteExperience',Experience.deleteExperience)


module.exports=router