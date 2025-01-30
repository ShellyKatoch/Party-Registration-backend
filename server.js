const express = require("express");
const router = require("./routes/payments.routes");
const app = express();
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const CourseRouter  = require("./routes/courseRoutes")

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/Coursedata',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err)) 

app.get('/',(req,res) => {
    res.send('Hello World!')
})
app.use('/uploads', express.static('uploads'));
app.use('/api',router);
app.use('/api',CourseRouter)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
  