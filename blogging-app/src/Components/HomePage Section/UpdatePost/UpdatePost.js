import React,{useState,useContext,useEffect} from 'react';
import axios from 'axios';
import {postIDContext,actionContext} from '../../../App';

function UpdatePost({id}) {

    const actionContextReturns=useContext(actionContext);
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [post,setPost]=useState({});
    const url=`http://localhost:3001/api/posts/${id}`;

    const fetchPostData=()=>{
        axios.get(url)
        .then(response=>{
            console.log(response.data);
            // setTitle(response.data.title);
            // setBody(response.data.body);
            setPost(response.data);
        })
        .catch(error=>console.log(error));
    }
    const onChangeHandler=(e)=>{
        setPost({...post,[e.target.name]:e.target.value})
        console.log(post);
    }
    const onSubmitHandler=()=>{
        axios.put(url,post)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))

        actionContextReturns.setAction('readOne');
    }

    useEffect(()=>{
        fetchPostData();
    },[]);

    return (
        <div>
            {id}
            <form onSubmit={onSubmitHandler}>
                <input name="title" onChange={e=>onChangeHandler(e)} value={post.title} required/>
                <input name="body" onChange={e=>onChangeHandler(e)} value={post.body} required/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default UpdatePost
