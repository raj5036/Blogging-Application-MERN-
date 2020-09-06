import React,{useState} from 'react';
import './App.css';
import NavBar from './Components/Navigation/Navbar/Navbar';
import SignIn from './Components/Navigation/SignIn/SignIn';
import Register from './Components/Navigation/Register/Register';

export const routeContext=React.createContext();
export const isSignedInContext=React.createContext();
const App=()=>  {

  const [isSignedIn,setIsSignedIn]=useState(false);
  const [route,setRoute]=useState('signin');

  console.log(isSignedIn);

      return(
        <routeContext.Provider value={{route,setRoute}}>
          <isSignedInContext.Provider value={{isSignedIn,setIsSignedIn}}>
              {
                (route==='signin')? <SignIn />
                : (route==='register') ? <Register />
                : <NavBar />
              }
          </isSignedInContext.Provider>
        </routeContext.Provider>
      );
  
}

export default App;
