const express=require('express')
const router=express.Router()
const Skillz = require('../Controllers/SkillzController/SkillzController')

router.post('/addSkillz',Skillz.addSkillz)
router.get('/getSkillz',Skillz.getSkillz)
router.post('/getuserSkillz',Skillz.getUserSkillz)



module.exports=router