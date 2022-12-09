import "../App.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {useState} from 'react';

export default function EditWine({wine, stopEditing, fetchWines}){

    const navigate = useNavigate();

    const endEdit = () =>{
        stopEditing()
    }

    const [formState, setFormState] = useState(wine);

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const submitForm = () =>{
       axios.post("http://localhost:4200/edit/"+wine._id, 
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
    return(
        <div> 
           <div>
            <p><button onClick={endEdit}>X</button></p>
            <div>
            Name
            <input value={formState.name} onChange={(e)=>{updateInput(e, "name")}} />
            </div>
            <br></br>
            <div>
            Type
                <input value={formState.type} onChange={(e)=>{updateInput(e, "type")}}/>
           </div>
           <br></br>
           <div>
                Year
                <input value={formState.year} onChange={(e)=>{updateInput(e, "year")}}/>
            </div>
            <br></br>
            <div>
                Region
                <input value={formState.region} onChange={(e)=>{updateInput(e, "region")}} />
            </div>
             <br></br>
           <div>
                Description
                <input value={formState.description} onChange={(e)=>{updateInput(e, "description")}} />
            </div>
            </div>

            <button onClick={submitForm}>Submit</button>
        </div>
    )
}