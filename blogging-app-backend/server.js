const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const bodyparser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cookieParser("secret"));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/wordDroids', {useNewUrlParser: true, useUnifiedTopology: true});
let db=mongoose.connection;

db.once('open',()=>{
    console.log(`Connected to MongoDB`)
});
db.on('error',(error)=>{console.log(error)});  //Check for error

//Models
let Post =require('./Models/post');

app.use('/api/posts',require('./Routes/Blogs'));
app.use('/api/users',require('./Routes/Users'));


const PORT=process.env.PORT || 3001;
app.listen(PORT,()=>{ console.log(`Server started on PORT ${PORT}`) });