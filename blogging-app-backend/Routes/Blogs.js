const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

//Bring in PostSchema
let Post=require('../Models/post');
const { response } = require('express');

const Blogs=[
    {
        id:1,
        title:"post one",
        body: "post one body",
        author:"Max",
        date:new Date()
    },
    {
        id:2,
        title:"post 2",
        body: "post 2 body",
        author:"Sam",
        date:new Date()
    },
    {
        id:3,
        title:"post 3",
        body: "post 3 body",
        author:"Jason",
        date:new Date()
    },
    {
        id:4,
        title:"post 4",
        body: "post 4 body",
        author:"Peter",
        date:new Date()
    }
];
//Show all posts
router.get('/',(req,res)=>{
    Post.find({},(error,posts)=>{
        if(error){
            console.log(error);
        }
        else{
            res.status(200).json(posts);
        }
    });
});

//Show post by id
router.get('/:id',(req,res)=>{
    Post.findById(req.params.id,(error,post)=>{
        if(error) throw new Error(error);
        console.log(post);
        res.status(200).send(`
            <h1>${post.title}</h1>
            <p>${post.body}</p>
        `);
        
    });
});

//Add Post
router.post('/',(req,res)=>{
    let post=new Post();
    post.title=req.body.title;
    post.body=req.body.body;
    post.author="Raj";
  
    if(!post.title || !post.body){
        return res.status(400).json({msg : "Blog should have a title and a body"});
    }

    console.log(post);
    post.save();
    res.end();
});

//Update an existing post
router.put('/:id',(req,res)=>{
    let query={_id : req.params.id};
    Post.update(query,{title : req.body.title, body : req.body.body},(err,log)=>{
        if(!err){
            console.log(log);
        }
        res.end();
    })
});

//Delete and exisiting post
router.delete('/:id',(req,res)=>{
    let query={_id:req.params.id};
    Post.findOneAndRemove(query,(err,response)=>{
        if(!err){
            console.log(response);
        }
        res.end();
    });
});

module.exports=router;