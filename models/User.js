const { default: mongoose } = require("mongoose")
const { Schema } = mongoose;

const userSchema = new Schema({
    fullName : {
        type : String,
        required : true
    },
    dob : {type : Date},
    fatherName : {type : String,required:true},
    gender : {type : String,required:true},
    email : {type : String,required:true},
    password : {type : String,required:true},
    phone : {type : Number,required:true},
    address : {type : String,required:true},
    idProof : {type : String,required:true},
    politicalInterests : {type : String},
    membershipType : {type : String,required : true},
    communicationMethod: {type : String},
   
   


})
const User = mongoose.model('User', userSchema , 'user')
module.exports = User;