import React,{useState} from 'react';
import './App.css';
import Register from './Components/Navigation/Register/Register';
import SignIn from './Components/Navigation/SignIn/SignIn';
import SignOut from './Components/HomePage Section/SignOut/SignOut';

const App=()=>  {
  const [isSignedIn,setIsSignedIn]=useState(false);
  const [route,setRoute]=useState('signin');

  const onRouteChange=(route)=>{
    setRoute(route);
  }
  console.log(isSignedIn);

  if(route==='signin')
      return (
        <div className="App">
          <Register onRouteChange={onRouteChange} setIsSignedIn={setIsSignedIn}/>
          <SignIn onRouteChange={onRouteChange} setIsSignedIn={setIsSignedIn}/>
        </div>
      );
  else
      return(
          <div>
            <SignOut onRouteChange={onRouteChange} setIsSignedIn={setIsSignedIn}/>
          </div>
      );
}

export default App;
