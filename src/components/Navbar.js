import React from "react";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import SignupOrLogin from "./Signup";
import axios from "axios";
import logo from './logo.png';


export default function NavBar() {
	const [theUser, setTheUser] = useState(null);
    const getUserInfo = () =>{
    axios.get("http://localhost:4200/serializeuser", {withCredentials: true})
    .then((response)=>{
      setTheUser(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getUserInfo();
  }, [])


  const logout = () =>{
    axios.post("http://localhost:4200/logout",{}, {withCredentials: true})
    .then((response)=>{
      console.log(response.data)
      if(response.data.message === "successfully logged out")setTheUser(null);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

	 return (
    <div className="nav-bar">

      {/* {!theUser && <div className='login-signup-container'>
        <SignupOrLogin action="signup" getUserInfo={getUserInfo} />
        <SignupOrLogin action="login" getUserInfo={getUserInfo} />
      </div>}

      {theUser && 
        <div>
          <button onClick={logout}
          >Logout</button>
      ``</div>}
       */}
       
    <br></br>
    <br></br>
    <center>
  
    <ul>
    <li><Link to = "/" >Home</Link></li>
    <li><Link to = "/recipes" >Your Recipes</Link></li>
    <li><Link to = "/recipes/create" >Add a Recipe</Link></li>
    <img src={logo} className="" alt="logo" width="220px"/>
    <li><Link to ="/wines" >Your Wines</Link></li>
    <li><Link to ="/wines/create" >Add a Wine</Link></li>
    <li><Link to ="/login" >Login</Link></li>
    <li><Link to ="/signup" >Sign Up</Link></li>
    </ul>
    </center>
    <br></br>
    
    </div>
    
  );

}
