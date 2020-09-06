import React,{useState} from 'react';
import './App.css';
import NavBar from './Components/Navigation/Navbar/Navbar';

export const routeContext=React.createContext();
export const isSignedInContext=React.createContext();
const App=()=>  {
  const [isSignedIn,setIsSignedIn]=useState(false);
  const [route,setRoute]=useState('signin');

  console.log(isSignedIn);

  return(
      <routeContext.Provider value={{route,setRoute}}>
        <isSignedInContext.Provider value={{isSignedIn,setIsSignedIn}}>
            <NavBar />
        </isSignedInContext.Provider>
      </routeContext.Provider>
  );
}

export default App;
