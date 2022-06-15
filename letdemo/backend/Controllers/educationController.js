const Education = require('../Models/Education')
const User = require('../Models/User')

exports.addEducation = (req, res) => {

    User.findOne({ _id: req.body.user })
        .then((user) => {
            Education.create({
                user: user.id,
                institution: req.body.institution,
                degree: req.body.degree,
                field: req.body.field,
                grade: req.body.grade,
                activities: req.body.activities,
                start: req.body.start,
                end: req.body.end,
                description: req.body.description
            }).then((data) => {
                console.log(data)
                res.send(data)
            }).catch((error) => {
                console.log(error)
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

exports.getAllEducation = (req, res) => {
    Education.find({})
        .then((data) => {
            res.send(data)
        }).catch((error) => {
            console.log(error)
        })
}

exports.getUser=(req,res)=>{
Education.find({id:req.body.id})
.populate('user')
.then((data)=>{
    // console.log(req.body.userID)
    res.send(data)
}).catch((err)=>{
    console.log(err)
}) 
}

exports.deleteOne=(req,res)=>{
    Education.remove({id:req.body._id})
    .then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error)
    })
}