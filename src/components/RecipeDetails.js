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
        <div className='recipe-details-component'>
           
            {editing && <EditRecipe fetchRecipes={fetchRecipes}stopEditing={setEditing} recipe={theRecipe} theWines={theWines} />}
            {!editing && <div>
            <p><button onClick={edit}>edit</button></p>
            <h3>{theRecipe.name}</h3>
            <p>{theRecipe.level}</p>
            <p>{theRecipe.ingredients}</p>
            <p>{theRecipe.cuisine}</p>
            <p>{theRecipe.duration}</p>
            </div>}
            
        </div>
    )
}