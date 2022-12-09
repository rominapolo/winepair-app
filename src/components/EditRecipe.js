import "../App.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {useState} from 'react';

export default function EditRecipe({recipe, stopEditing, fetchRecipes}){

    const navigate = useNavigate();

    const endEdit = () =>{
        stopEditing()
    }

    const [formState, setFormState] = useState(recipe);

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const submitForm = () =>{
       axios.post("http://localhost:4200/edit/"+recipe._id, 
        {
            name: formState.name,
            level: formState.level,
            cuisine: formState.cuisine,
            ingredients: formState.ingredients,
            duration: formState.duration,

        })
        .then((response)=>{
            console.log(response);
            fetchRecipes();
            navigate("/recipes");
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
    Level
    <input value={formState.level} onChange={(e)=>{updateInput(e, "level")}}/>
    </div>
    <br></br>

    <div>
    Cuisine
     <input value={formState.cuisine} onChange={(e)=>{updateInput(e, "ingredients")}}/>
    </div>
    <br></br>
    
    <div>
    Ingredients
    <input value={formState.ingredients} onChange={(e)=>{updateInput(e, "ingredients")}} />
    </div>
    <br></br>
    <div>
    Duration
    <input value={formState.duration} onChange={(e)=>{updateInput(e, "duration")}} />
    </div>
    </div>
    
    <button onClick={submitForm}>Submit</button>
    </div>
    )
}