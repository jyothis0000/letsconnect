require('dotenv').config()
const express=require('express')
const bodyParser=require('body-parser')
var passport = require('passport')
const mongoose=require('mongoose')
const cors=require('cors') 
const dbConfig=require('./config/config')
const app=express()
const UserRoutes=require('./Routes/userRoutes')
const EducationRoutes=require('./Routes/educationRoutes')
const ExperienceRoutes=require('./Routes/experienceRoutes')
const SkillzRoutes=require('./Routes/skillzRoutes')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use(passport.initialize());

require('./middleware/passport')

mongoose.Promise = global.Promise

mongoose.connect(dbConfig.url,{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>{
    console.log('Connected to the database successfully')
}).catch((err)=>{
    console.log(err)
    process.exit()
})

//User Routes
app.use('/user',UserRoutes)

//Education Routes

app.use('/education',EducationRoutes)

//Experience Routes

app.use('/experience',ExperienceRoutes)

//Skillz Routes

app.use('/skillz',SkillzRoutes)



app.listen(5000,()=>{
    console.log('Server is running at port 5000')
})


