import React,{useContext} from 'react';
import {routeContext,isSignedInContext} from '../../../App';
import axios from 'axios';

function SignIn() {
    const route=useContext(routeContext);
    const isSignedIn=useContext(isSignedInContext);

    const onSubmitHandler=()=>{
        axios.get("http://localhost:3001/api/users/signin")
        .then(response=>console.log(response))
        .catch(error=>console.log(error));
    }

    return (
        <div>
            <article className="pa4 black-80">
              <form onSubmit={onSubmitHandler} method="get" acceptCharset="utf-8">
                <fieldset id="signin" className="ba b--transparent ph0 mh0">
                    <legend className="ph0 mh0 fw6 clip">Sign in</legend>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email" autoComplete="on"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" htmlFor="email-address">Password</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="password" name="password" autoComplete="on" />
                    </div>
                </fieldset>
                <div className="mt3">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign In" onClick={()=>{route.setRoute('home');isSignedIn.setIsSignedIn(true)}}/>
                </div>
              </form>
          </article>
        </div>
    )
}

export default SignIn
