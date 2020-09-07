const mongoose=require('mongoose');

//PostSchema Definition

const PostSchema=mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true,
    },
    author : {
        type : String,
        required : true,
    },
});

let Post = module.exports = mongoose.model('Post',PostSchema);