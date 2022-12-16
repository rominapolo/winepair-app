import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';

export default function CreateRecipe({theWines, fetchRecipes}) {
    const navigate = useNavigate();

    const wineList = theWines.map((eachWine) =>{
        console.log(eachWine);
        return <option value={eachWine._id}>{eachWine.name}</option>
    })
      
    const [formState, setFormState] = useState({
        name: "",
        level: "",
        cuisine: "",
        ingredients: "",
        instructions: "",
        duration: "",
        wine: "",
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
            instructions: formState.instructions,
            duration: formState.duration,
            wine: formState.wine,
            // creator: formState.creator,

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
    
    return (
     <div className='add-wine-or-recipe'>
     <div className='add-form'>
     <center>
     <h1>Add a New Recipe</h1>

            <div>
                Name
                <input type="text" value={formState.name} onChange={(e)=>{updateInput(e,"name")}} />
            </div>
            <br></br>
            <div>
                Level
                <select type="text" value={formState.level} onChange={(e)=>{updateInput(e,"level")}}>
                <option value="">Select Level</option>
                <option value="easy">Easy</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert</option>
                </select> 
               
            </div>
            <br></br>
             <div>
                Cuisine
                <input type="text" value={formState.cuisine} onChange={(e)=>{updateInput(e,"cuisine")}} />
            </div>
            <br></br>
            <div>
                Ingredients
                <textarea rows="6" cols="30" type="text" value={formState.ingredients} onChange={(e)=>{updateInput(e,"ingredients")}}>
                 </textarea> 
                
            </div>
            <br></br>
             <div>
                Instructions
                <textarea rows="6" cols="30" type="text" value={formState.instructions} onChange={(e)=>{updateInput(e,"instructions")}}>
                </textarea>
            </div>
            <br></br>
            <div>
                Duration
                <input type="text" value={formState.duration} onChange={(e)=>{updateInput(e,"duration")}} />
            </div>
            <br></br>
            <div>
                Pair With
                <select value={formState.wine} onChange={(e)=>{updateInput(e,"wine")}}>
                <option value="">Select Wine</option>
                {wineList}
                </select>
            </div>
            <br></br>
            <button onClick={submitForm}>Add a Recipe</button>
        </center>
        </div>

        <div className='recipe-image'>
        </div>

        </div>
  )
}
