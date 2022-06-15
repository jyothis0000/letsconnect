const Experience=require('../../Models/Experience')
const User=require('../../Models/User')

exports.addExperience=(req,res)=>{
   User.findOne({_id:req.body.user})
   .then((user)=>{
       Experience.create({
           user:user.id,
           role:req.body.role,
           company:req.body.company,
           from:req.body.from,
           to:req.body.to,
           total:req.body.total
    }).then((data)=>{
        res.send(data)
    })
   }).catch((error)=>{
       console.log(error)
   })
}

exports.getExperience=(req,res)=>{
    Experience.find({})
    .then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error)
    })
}



exports.getUserExperience=(req,res)=>{
    Experience.find({id:req.body.id})
    .populate('user')
    .then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error)
    })
}

exports.deleteExperience=(req,res)=>{
    Experience.remove({id:req.body.id})
    .then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error)
    })
}