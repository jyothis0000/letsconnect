const mongoose=require('mongoose')

const experienceSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    role:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
   from :{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    total:{
        type:String,
        required:true
    }
    

})

module.exports =mongoose.model('experience',experienceSchema)