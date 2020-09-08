import React,{useState} from 'react';
import './App.css';
import NavBar from './Components/Navigation/Navbar/Navbar';
import SignIn from './Components/Navigation/SignIn/SignIn';
import Register from './Components/Navigation/Register/Register';
import Post from './Components/HomePage Section/Posts/Post';
import AddPost from './Components/HomePage Section/AddPost/AddPost';
import SinglePost from './Components/HomePage Section/SinglePost/SinglePost';
import UpdatePost from './Components/HomePage Section/UpdatePost/UpdatePost';

export const routeContext=React.createContext();
export const isSignedInContext=React.createContext();
export const actionContext=React.createContext();
export const postIDContext=React.createContext();

const App=()=>  {

  const [isSignedIn,setIsSignedIn]=useState(false);
  const [route,setRoute]=useState('signin');
  const [action,setAction]=useState('read'); //Possible Action Types : create,  read , readOne , update , delete
  const [postID,setPostID]=useState('');

  console.log(`isSignedIn ${isSignedIn}`);

      return(
        <routeContext.Provider value={{route,setRoute}}>
          <isSignedInContext.Provider value={{isSignedIn,setIsSignedIn}}>
            <actionContext.Provider value={{action,setAction}}>
              <postIDContext.Provider value={{postID,setPostID}}>
                      {
                        (route==='signin')? <SignIn />
                        : (route==='register') ? <Register />
                        : (
                            <div>
                              <NavBar />
                              {
                                (action==='read') ? <div><Post /></div>
                                :  (action==='readOne') ? <div><SinglePost id={postID}/></div>
                              :(action==='create') ? <div><AddPost /></div>
                              :(action==='update') ? <div><UpdatePost id={postID}/></div>
                              : <div>{`This page is to delete post`}{/*<DeletePost />*/}</div>
                              }
                            </div>
                          )
                      }
                  </postIDContext.Provider>
              </actionContext.Provider>
          </isSignedInContext.Provider>
        </routeContext.Provider>
      );
  
}

export default App;
