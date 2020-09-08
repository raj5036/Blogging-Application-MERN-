import React,{useState,useContext,useEffect} from 'react';
import axios from 'axios';
import {postIDContext} from '../../../App';

function UpdatePost({id}) {

    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [post,setPost]=useState({});

    //const postIDContextReturns=useContext(postIDContext);
    //const id=postIDContextReturns.id;
    let url=`http://localhost:3001/api/posts/${id}`;

    useEffect(()=>{
        axios.default.get(url)
        .then(response=>{
        setPost(response.data);
        console.log(post);
        })
        .catch(error=>console.log(error));
    },[url]);

    const onSubmitHandler=(e)=>{
        //e.preventDefault();
        console.log(title);
        console.log(body);
        axios.put(url,{
            title : title,
            body : body,
        })
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
    }

    return (
        <div>
            <article className="pa4 black-80">
              <form onSubmit={onSubmitHandler} method="post" acceptCharset="utf-8">
                <fieldset id="addPost" className="ba b--transparent ph0 mh0">
                    <legend className="ph0 mh0 fw6 clip">Create your blog here</legend>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" htmlFor="title">title</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" value={post.title} autoComplete="on" onChange={e=>setTitle(e.target.value)}/>
                    </div>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" htmlFor="body">body</label>
                        <textarea className="pa2 input-reset ba bg-transparent w-100 measure" value={post.body} autoComplete="on" onChange={e=>setBody(e.target.value)}/>
                    </div>
                </fieldset>
                <div className="mt3">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Submit"/>
                </div>
              </form>
          </article>
        </div>
    )
}

export default UpdatePost
