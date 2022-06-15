const bcrypt=require('bcryptjs')
const difficultyLevel=10

exports.hashPassword=async(password)=>{
        const salt=await bcrypt.genSalt(difficultyLevel) //generating salt at difficultylevel 10
        const hash=await bcrypt.hash(password,salt) //hashing password
        return hash
}

exports.verifyPassword=async(password,hashedPassword)=>{

    try{
        const result=await bcrypt.compare(password,hashedPassword)
        return result
    }catch(error){
        console.log(error)
    }

}