import React,{useState,useContext,useEffect} from 'react';
import axios from 'axios';
import {actionContext} from '../../../App';

function SinglePost({id}) {

    //const postIDContextReturns=useContext(postIDContext);
    //const id=postIDContextReturns.id;
    const actionContextReturns=useContext(actionContext);
    const url=`http://localhost:3001/api/posts/${id}`;
    const [post,setPost]=useState({});

    useEffect(()=>{
        axios.default.get(url)
        .then(response=>{
        setPost(response.data);
        //console.log(post);
        })
        .catch(error=>console.log(error));
    },[url]);

    
    return (
        <div>
            <button className="bg-dark white m-2" onClick={()=>{actionContextReturns.setAction('read')}}>Go back</button>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button className="bg-yellow m-2" onClick={()=>{actionContextReturns.setAction('update')}}>Edit</button>
            <button className="bg-red m-2" onClick={()=>{actionContextReturns.setAction('delete')}}>Delete</button>
        </div>
    )
}

export default SinglePost
