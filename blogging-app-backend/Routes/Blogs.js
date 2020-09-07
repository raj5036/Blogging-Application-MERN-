const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

//Bring in PostSchema
let Post=require('../Models/post');

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
        return res.status(200).json({msg : `request successful`});
    
    });
});

//Add Post
router.post('/',(req,res)=>{
    let post=new Post();
    post.title=req.body.title;
    post.body=req.body.body;
    post.author=req.body.author;
  
    if(!post.title || !post.body){
        return res.status(400).json({msg : "Blog should have a title and a body"});
    }

    console.log(post);
    post.save((err)=>{
        if(err) throw new Error(err);
        else{
            res.status(200);
        }
    });
    res.end();
});

//Update an existing post
router.put('/:id',(req,res)=>{
    //let found=Blogs.some(blog=>blog.id===parseInt(req.params.id));
    let post={};
    post.id=parseInt(req.params.id);
    post.title=req.body.title;
    post.body=req.body.body;
    let query={_id : req.params.id}
    Post.updateOne(query,post,(err)=>{
        if(!err){
            console.log(post);
        }
    });
    res.json(post);
    // console.log(found,`for update`);
    // if(!found){
    //     return res.status(400).json({msg : `No such post exists`});
    // }

    // Blogs.forEach(blog=>{
    //     blog.title= req.body.title;
    //     blog.body=req.body.body;
    //     date=new Date();
    // });
    // res.status(200).json(Blogs);
    res.end();
});

//Delete and exisiting post
router.delete('/:id',(req,res)=>{
    let found=Blogs.some(blog=>blog.id===parseInt(req.params.id));
    console.log(found,`for delete`);
    if(!found){
        return res.status(400).json({msg : `No such post exists`});
    }
    res.status(200).json(Blogs.filter(blog=>blog.id !== parseInt(req.params.id)));
    res.end();
});

module.exports=router;