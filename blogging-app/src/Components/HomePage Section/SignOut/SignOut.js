import React,{useContext} from 'react';
import {routeContext,isSignedInContext} from '../../../App'; 

function SignOut() {

    const route=useContext(routeContext);
    const isSignedIn=useContext(isSignedInContext);

    return (
        <div>
            <button onClick={()=>{route.setRoute('signin');isSignedIn.setIsSignedIn(false)}}>SignOut</button>
        </div>
    )
}

export default SignOut
