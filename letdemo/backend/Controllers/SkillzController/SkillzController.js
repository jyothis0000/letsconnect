const Skillz=require('../../Models/Skillz')
const User=require('../../Models/User')


exports.addSkillz=(req,res)=>{
    User.findOne({_id:req.body.user})
    .then((user)=>{
        Skillz.create({
            user:user.id,
            skillz:req.body.skillz
        }).then((data)=>{
            res.send(data)
        })
    }).catch((error)=>{
        console.log(error)
    })
}


exports.getSkillz=(req,res)=>{
    Skillz.find({})
    .then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error)
    })
}

exports.getUserSkillz=(req,res)=>{
    Skillz.find({id:req.body.id})
    .populate('user')
    .then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error)
    })
}