import React,{useState,useContext} from 'react';
import axios from 'axios';
import {actionContext,postIDContext} from '../../../App';


function Post() {
    const [posts,setPosts]=useState([]);

    const actionContextReturns=useContext(actionContext);
    const postIDContextReturns=useContext(postIDContext);

    //let url=`http://localhost:3001/api/posts/${postIDContextReturns.id}`
    const fetchData=()=>{
        
        axios.default.get("http://localhost:3001/api/posts/")
        .then(response=>{
            //console.log(response);
            setPosts(response.data);
        })
        .catch(error=>{
            console.log(error);
        });
        
    };
    fetchData();

        return (
            <div>
                <ul>
                    {
                        posts.map(post=>{
                            return (
                                <div>
                                        <li key={post._id}>
                                        <h2 className="pointer grow blue" onClick={()=>{actionContextReturns.setAction('readOne');postIDContextReturns.setPostID(post._id);console.log(post._id)}}>
                                            {post.title}
                                        </h2>
                                    </li>
                                </div>
                            );
                        })
                    }
                </ul>
            </div>
        )
}

export default Post
