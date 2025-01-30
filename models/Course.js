const { default: mongoose } = require("mongoose")
const { Schema } = mongoose;

const courseSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
        price: {
        type : Number,
        default: 0,
        required : true
        },
        thumbnail : {
            type : String,
            required : true
        }
        
})
const Course = mongoose.model('Course', courseSchema,'course');
module.exports = Course;