import "../App.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
// {wine, stopEditing, fetchWines}
export default function EditWine(props){

    const navigate = useNavigate();

    const endEdit = () =>{
        props.stopEditing()
    }

    const [formState, setFormState] = useState(props.wine);

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }
    

    const submitForm = () =>{
       axios.post("http://localhost:4200/wines/edit/"+props.wine._id, 
        {
            name: formState.name,
            type: formState.type,
            year: formState.year,
            region: formState.region,
            description: formState.description,

        })
        .then((response)=>{
            console.log(response);
            props.fetchWines();
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
                <select type="text" value={formState.type} onChange={(e)=>{updateInput(e,"type")}}>
                <option value="Red">Red</option>
                <option value="White">White</option>
                <option value="Rose">Rosé</option>
                <option value="Dessert">Dessert</option>
                <option value="Sparkling">Sparkling</option>
                </select> 
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