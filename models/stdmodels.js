const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    calss:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    hobbies:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    images:{
        type:String,
        required:true
    },
})
const stddata = mongoose.model('stddata', schema)
module.exports = stddata  