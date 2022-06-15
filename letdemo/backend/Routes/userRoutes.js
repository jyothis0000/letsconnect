const express=require('express')
const router=express.Router()
const User = require('../Controllers/UserController/userController')
const passport = require('passport')

router.post('/register',User.register)
router.get('/getUser',User.getUser)
router.post('/login',User.login)
router.get('/protected',passport.authenticate('jwt',{session:false}),User.protected)


module.exports=router