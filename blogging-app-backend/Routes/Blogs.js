const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

//Bring in PostSchema
let Post=require('../Models/post');
const { response } = require('express');


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
    let query={_id : req.params.id}
    Post.findOne(query,(err,response)=>{
        if(!err){
            res.status(200).json(response);
        }
    })
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