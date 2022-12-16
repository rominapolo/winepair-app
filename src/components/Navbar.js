import React from "react";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import SignupOrLogin from "./Signup";
import axios from "axios";
import logo from './images/logo.png';


export default function NavBar() {

  const [theUser, setTheUser] = useState(null);

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

    {!theUser && <li><Link to ="/login">Login</Link></li>}
    {theUser && <li onClick={()=>{logout()}}><Link>Log Out</Link></li>}

    <li><Link to ="/signup" >Sign Up</Link></li>
    </ul>
    </center>
    <br></br>
    
    </div>
    
  );

}
