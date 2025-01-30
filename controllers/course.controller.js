const Course = require('../models/Course');
const User = require('../models/User');

exports.addCourse = async (req , res) => {
    try{
        const {title, description, price} = req.body;
        const thumbnail = req.file ? `http://localhost:3000/uploads/${req.file.filename}` : null;

        const newCourse = new Course({title , description, price ,thumbnail});
        await newCourse.save();

        res.status(201).json({message: 'Course added successfully', course : newCourse})
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Failed to add course'})
    }
}
exports.getAllCourses = async (req , res) => {
    try{
        const courses = await Course.find();
        res.status(200).json(courses);
      }
      catch(err){
        res.status(500).json({message : 'Internal server error'})
      }
}
exports.signup = async (req , res) => {
    try{
     const {fullName , dob, fatherName, gender,email,password,phone,address,politicalInterests,membershipType,communicationMethod} = req.body;
     console.log(req.body,req)
     const idProof = req.file ? `http://localhost:3000/uploads/${req.file.filename}` : null;
     const newUser = new User({fullName , dob, fatherName, gender,email,password,phone,address,idProof,politicalInterests,membershipType,communicationMethod})
     await newUser.save();
     res.status(201).json({message: 'User added successfully', user : newUser})
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Failed to add user'})
    }
}
exports.login = async (req, res) => {
    try{
        const {email, password} = req.body
        console.log(req.body,"body")
       const user = await User.findOne({email})
       if(!user){
          return  res.status(404).json({message : 'User not found'})
       }
         if(user.password !== password){
           return res.status(401).json({message : 'Invalid password'})
         }
         else{
              return res.status(200).json({message : 'User logged in successfully'})
         }
      
    }
    catch(err) {
      console.log(err);
      res.status(500).json({error: 'Failed to login'})
    }
}