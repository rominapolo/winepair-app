import "../App.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {useState} from 'react';

export default function EditRecipe({theWines, recipe, stopEditing, fetchRecipes}){

    const navigate = useNavigate();

    console.log(theWines)

    const wineList = theWines.map((eachWine) =>{
        console.log(eachWine);
        return <option value={eachWine._id}>{eachWine.name}</option>
    })

    const endEdit = () =>{
        stopEditing()
    }

    const [formState, setFormState] = useState(recipe);

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }

    const submitForm = () =>{
       axios.post("http://localhost:4200/recipes/edit/"+recipe._id, 
        {
            name: formState.name,
            level: formState.level,
            cuisine: formState.cuisine,
            ingredients: formState.ingredients,
            instructions: formState.instructions,
            duration: formState.duration,
            wine: formState.wine,

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
    <div className="edit-page"> 
        <center>
        <div>
        <p><button onClick={endEdit}>X</button></p>
        <div>
            Name  
            <input value={formState.name} onChange={(e)=>{updateInput(e, "name")}} />
            </div>
            <br></br>
        <div>
            Level
            <select type="text" value={formState.level} onChange={(e)=>{updateInput(e,"level")}}>
            <option value="easy">Easy</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
            </select> 
        </div>
        <br></br>
        <div>
            Cuisine
            <input value={formState.cuisine} onChange={(e)=>{updateInput(e, "ingredients")}}/>
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
            <input value={formState.duration} onChange={(e)=>{updateInput(e, "duration")}} />
            </div>
            <br></br>
        <div>
            Pair With
            <select value={formState.wine} onChange={(e)=>{updateInput(e,"wine")}}>
            {wineList}
            </select>
            </div>
            <br></br>

            </div>
    <button onClick={submitForm}>Submit</button>
       </center>
    </div>
    )
}