const mongoose=require('mongoose')

const educationSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    institution:{
        type:String,
        required:true
    },
    degree:{
        type:String,
        required:true
    },
    field:{
        type:String,
        required:true
    },
    grade:{
        type:String,
        required:true
    },
    activities:{
        type:String,
        required:true
    },
    start:{
        type:Number,
        required:true
    },
    end:{
        type:Number,
        required:true
    },
    description:{
        type:String
    }

})

module.exports =mongoose.model('education',educationSchema)