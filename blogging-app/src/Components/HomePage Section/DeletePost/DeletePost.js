import React,{useContext,useEffect} from 'react';
import axios from 'axios';
import {actionContext} from '../../../App';
function DeletePost({id}) {
    const actionContextreturns=useContext(actionContext);
    const url=`http://localhost:3001/api/posts/${id}`
    useEffect(()=>{
        axios.delete(url)
        .then(response=>console.log(response))
        .catch(error=>console.log(error));

        actionContextreturns.setAction('read');
    },[]);
    return (
        <div>
            
        </div>
    )
}

export default DeletePost
