import React,{useContext} from 'react';
import { Button } from 'react-bootstrap';
import {routeContext,isSignedInContext} from '../../../App';

function Routing() {
    const route=useContext(routeContext);
    const isSignedIn=useContext(isSignedInContext);
    if(isSignedIn.isSignedIn===false)
        return (
            <div>                    
                <Button variant="outline-success" onClick={()=>{route.setRoute('signin')}}>SignIn</Button>
                <Button variant="outline-success" onClick={()=>{route.setRoute('register')}}>Register</Button>
            </div>
        )
    else
        return(
            <div>
                <Button variant="outline-success" onClick={()=>{isSignedIn.setIsSignedIn(false)}}>SignOut</Button>                    
            </div>
        );
}

export default Routing
