import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Post() {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        axios.default.get("https://jsonplaceholder.typicode.com/posts")
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
                            <li key={post.id}>
                                <h1>{post.title}</h1>
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
