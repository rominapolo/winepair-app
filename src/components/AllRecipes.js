import React from 'react'
import {Link} from "react-router-dom";

export default function AllRecipes({theRecipes, fetchRecipes}) {

console.log(theRecipes);

const listOfRecipes = theRecipes.map((eachRecipe)=>{

return(<div key={eachRecipe._id} className="recipe-list">
<Link to={"/recipes/"+eachRecipe._id}>
<h3>{eachRecipe.name}</h3> </Link>
</div>)
})


return(
   <div className="recipe-list-container">
       <h1>Your Recipes</h1>
       {listOfRecipes}
       <Link to={"/recipes/create"}>Add a Recipe</Link>
    </div>
    )
}