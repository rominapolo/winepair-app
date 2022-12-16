import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import EditRecipe from './EditRecipe';

export default function RecipeDetails({fetchRecipes,theUser, theWines}){
  const {id} = useParams();

  const [editing, setEditing] = useState(false);

  const edit = () => {
        setEditing(true);
    }
  const stopEditing = () => {
        setEditing(false);
    }

  const [theRecipe, setTheRecipe] = useState(null);

  console.log(id);


  const fetchRecipeDetails = ()=>{
        axios.get("http://localhost:4200/recipes/"+id)
        .then((response)=>{
            console.log(response);
            setTheRecipe(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchRecipeDetails();
    },[id])

    console.log(theRecipe);

    if(!theRecipe){
        return ""
    }

   return(
        <div className='details-component'>
           
            {editing && <EditRecipe fetchRecipes={fetchRecipes}stopEditing={setEditing} recipe={theRecipe} theWines={theWines} />}
            <center>
            {!editing && <div className='details'>
            <p><button onClick={edit}>edit</button></p>
            <h1>{theRecipe.name}</h1>

            <h4>Cuisine:</h4>  
            <p>{theRecipe.cuisine}</p>

            <h4>Level:</h4>
            <p>{theRecipe.level}</p>

            <h4>Duration:</h4>
            <p>{theRecipe.duration}</p>

            <h4>Ingredients:</h4>
            <p>{theRecipe.ingredients}</p>

            <h4>Instructions:</h4>
            <p>{theRecipe.instructions}</p>

        
            </div>}
            </center>
        </div>
    )
}