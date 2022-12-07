import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';

export default function CreateWine() {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        name: "",
        type: "",
        year: "",
        region: "",
        image: "",
        description: "",
    })

     const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const submitForm = () =>{
        axios.post("http://localhost:4200/wines/create", 
        {
            name: formState.name,
            type: formState.type,
            year: formState.year,
            region: formState.region,
            image: formState.image,
            description: formState.description,

        })
        .then((response)=>{
            console.log(response);
            navigate("/wines");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    return (
     <div>
     <h1>Add a New Wine!</h1>
            <div>
                Name
                <input type="text" value={formState.name} onChange={(e)=>{updateInput(e,"name")}} />
            </div>
            <br></br>
            <div>
                Image
                <input type="file" value={formState.image} onChange={(e)=>{updateInput(e,"image")}} />
            </div>
            <br></br>
            <div>
                Year
                <input type="number" value={formState.year} onChange={(e)=>{updateInput(e,"year")}} />
            </div>
            <br></br>
            <div>
                Region
                <input type="text" value={formState.region} onChange={(e)=>{updateInput(e,"region")}} />
            </div>
            <br></br>
             <div>
                Cuisine
                <input type="text" value={formState.cuisine} onChange={(e)=>{updateInput(e,"cuisine")}} />
            </div>
            <br></br>
            <div>
                Duration
                <input type="text" value={formState.duration} onChange={(e)=>{updateInput(e,"duration")}} />
            </div>
            <br></br>
            <div>
                Description
                <input type="text" value={formState.description} onChange={(e)=>{updateInput(e,"description")}} />
            </div>
           
            <button onClick={submitForm}>Submit</button>
        </div>
  )
}
