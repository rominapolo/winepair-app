import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';

export default function CreateWine(fetchWines) {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        name: "",
        type: "",
        year: "",
        region: "",
        description: "",
    })

     const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const submitForm = () =>{
        console.log(formState)
        axios.post("http://localhost:4200/wines/create", 
        {
            name: formState.name,
            type: formState.type,
            year: formState.year,
            region: formState.region,
            description: formState.description,

        })
        .then((response)=>{
            console.log(response);
            fetchWines();
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
                Type
                <select type="text" value={formState.type} onChange={(e)=>{updateInput(e,"type")}}>
                <option value="red">Red</option>
                <option value="white">White</option>
                <option value="rose">Rosé</option>
                <option value="dessert">Dessert</option>
                <option value="sparkling">Sparkling</option>
                </select> 
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
                Description
                <textarea rows="6" cols="30" type="text" value={formState.description} onChange={(e)=>{updateInput(e,"description")}}>
                </textarea>
            </div>
           
            <button onClick={submitForm}>Submit</button>
        </div>
  )
}
