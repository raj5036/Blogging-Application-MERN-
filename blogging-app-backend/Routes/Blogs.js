const express=require('express');
const router=express.Router();

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
    res.status(200).json(Blogs);
});

//Show post by id
router.get('/:id',(req,res)=>{
    let found = Blogs.some(blog=> blog.id===parseInt(req.params.id));
    if(!found){
        return res.status(400).json({msg : `no such blog with id ${req.params.id}`});
    }
    else{
        res.status(200).json(Blogs.filter(blog=> blog.id===parseInt(req.params.id)));
    }
});

//Add Post
router.post('/',(req,res)=>{
    const newBlog={
        id:req.body.id,
        title:req.body.title,
        body: req.body.body,
        author:req.body.author,
        date:new Date()
    }
    if(!newBlog.title || !newBlog.body){
        return res.status(400).json({msg : "Blog should have a title and a body"});
    }
    Blogs.push(newBlog);
    res.status(200).json(Blogs);
});

//Update an existing post
router.put('/:id',(req,res)=>{
    let found=Blogs.some(blog=>blog.id===parseInt(req.params.id));
    console.log(found,`for update`);
    if(!found){
        return res.status(400).json({msg : `No such post exists`});
    }

    Blogs.forEach(blog=>{
        blog.title= req.body.title;
        blog.body=req.body.body;
        date=new Date();
    });
    res.status(200).json(Blogs);
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