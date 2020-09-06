import React from 'react'

function SignOut({onRouteChange,setIsSignedIn}) {
    return (
        <div>
            <button onClick={()=>{onRouteChange('signin');setIsSignedIn(false)}}>SignOut</button>
        </div>
    )
}

export default SignOut
