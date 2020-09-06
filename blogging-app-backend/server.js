const express=require('express');
const app=express();
const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/api/posts',require('./Routes/Blogs'));

app.get('/',(req,res)=>{
    res.send(`<h1>Server Started Successfully</h1>`);
});

const PORT=process.env.PORT || 3001;
app.listen(PORT,()=>{ console.log(`Server started on PORT ${PORT}`) });