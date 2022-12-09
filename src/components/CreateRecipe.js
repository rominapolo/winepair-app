import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';

export default function CreateRecipe() {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        name: "",
        level: "",
        ingredients: "",
        cuisine: "",
        image: "",
        duration: "",
        pairWith: "",
        creator: "",
    });

     const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const submitForm = () =>{
        console.log(formState)
        axios.post("http://localhost:4200/recipes/create", 
        {
            name: formState.name,
            level: formState.level,
            cuisine: formState.cuisine,
            ingredients: formState.ingredients,
            duration: formState.duration,
            // pairWith: formState.pairWith,
            // creator: formState.creator,

        })
        .then((response)=>{
            console.log(response);
            // props.fetchRecipes();
            navigate("/recipes");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    return (
     <div>
     <h1>Add a New Recipe!</h1>

            <div>
                Name
                <input type="text" value={formState.name} onChange={(e)=>{updateInput(e,"name")}} />
            </div>
            <br></br>
            <div>
                Level
                <input type="text" value={formState.level} onChange={(e)=>{updateInput(e,"level")}} />
            </div>
            <br></br>
             <div>
                Cuisine
                <input type="text" value={formState.cuisine} onChange={(e)=>{updateInput(e,"cuisine")}} />
            </div>
            <br></br>
            <div>
                Ingredients
                <input type="text" value={formState.ingredients} onChange={(e)=>{updateInput(e,"ingredients")}} />
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
            {/* <div>
                Pair With
                <input type="text" value={formState.pairWith} onChange={(e)=>{updateInput(e,"pairWith")}} />
            </div>
            <br></br>
            <div>
                Created By
                <input type="text" value={formState.creator} onChange={(e)=>{updateInput(e,"creator")}} />
            </div> */}
            
            <button onClick={submitForm}>Submit</button>
        </div>
  )
}
