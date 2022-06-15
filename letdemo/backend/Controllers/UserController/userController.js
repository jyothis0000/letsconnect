const User = require('../../Models/User')
const hash=require('./bcrypt')
const jwt=require('./jwtToken')

exports.register= async(req,res)=>{

    const hashedPassword= await hash.hashPassword(req.body.password)
    User.create({ username:req.body.username, email:req.body.email, password:hashedPassword})
    .then((data)=>{
        res.send(data)
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })

}


exports.getUser=(req,res)=>{
    User.find({})
    .then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error)
    })
}


exports.login=async(req,res)=>{
    try{
        await User.findOne({email:req.body.email})
        .then(async (user)=>{
            if(user){
                const checkPassword=await hash.verifyPassword(req.body.password,user.password)
                if(checkPassword){
                    const payload={
                        username:user.username,
                        email:user.email
                    }
                    const token= await jwt.generateToken(payload)
                    res.send({
                        success:true,
                        token:"Bearer "+token
                    })
                }else{
                    res.send('Incorrect Password ! .Try again')
                }
            }else{
                res.send('Username not found')
            }
        })
    }catch(error){
        console.log(error)
    }
}

exports.protected=(req,res)=>{
    res.send('You are in protected route')
}