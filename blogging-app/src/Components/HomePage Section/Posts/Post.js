import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import {actionContext} from '../../../App';

function Post() {
    const [posts,setPosts]=useState([]);

    const actionContextReturns=useContext(actionContext);

    useEffect(()=>{
        axios.default.get("http://localhost:3001/api/posts/")
        .then(response=>{
            //console.log(response);
            setPosts(response.data);
        })
        .catch(error=>{
            console.log(error);
        });
    },[]);

    return (
        <div>
            <ul>
                {
                    posts.map(post=>{
                        return (
                            <li key={post._id}>
                                <a href={`http://localhost:3001/api/posts/${post._id}`} onClick={()=>actionContextReturns.setAction('readOne')}>{post.title}</a>
                                <p>{post.body}</p>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default Post
