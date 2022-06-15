const mongoose=require('mongoose')

const skillzSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    skillz:{
        type:Array,
        required:true
    }

})

module.exports =mongoose.model('skillz',skillzSchema)