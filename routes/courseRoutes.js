const express = require('express');
const {addCourse , getAllCourses,signup,login} = require('../controllers/course.controller')

const router = express.Router();

const multer  = require('multer');
const path = require('path');



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save files to 'uploads' directory
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
      },
   
})
const upload = multer({storage});

router.post('/course', upload.single('thumbnail'), addCourse)
router.get('/course', getAllCourses)
router.post('/register',upload.single('idProof'),signup)
router.post('/login',login)

module.exports = router;