import axios from 'axios';
import {useState} from 'react';


export default function SignupOrLogin({action, getUserInfo}){


    const [formState, setFormState] = useState({
        email: "",
        password: ""
    });

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    
    const submitSignupForm = () =>{
        let endpoint;
        if(action ==="signup") endpoint = "signup";
        if(action ==="login") endpoint = "login"

        axios.post("http://localhost:4200/"+endpoint, {
            email: formState.email,
            password: formState.password
        },

        {withCredentials: true}
        )
        .then((response)=>{
            getUserInfo();
        })
        .catch((err)=>{
            console.log(err);
        })
       

    }

    return(
    <div className='login-signup'>
    <center>
    <div className={action} className='login-signup-form'>
      {action === "signup" ? "Signup" : "Login"}
      <div>
        <h4>Email</h4>
        <input type="text" value={formState.username} onChange={(e)=>{updateInput(e, "email")}} />
      </div>
      <br></br>
      <div>
        <h4>Password</h4>
        <input type="text" value={formState.password} onChange={(e)=>{updateInput(e, "password")}} />
      </div>
      <br></br>
      <button onClick={submitSignupForm}>Submit</button>
     
    </div>
     </center>
    </div>  
    
    )

}