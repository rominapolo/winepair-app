import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';


export default function AllRecipes({theRecipes, fetchRecipes, eachRecipe}) {


const deleteRecipe = (theID) => {
		console.log(theID);
		axios
			.post("http://localhost:4200/recipes/remove", { id: theID })
			.then((response) => {
				console.log(response);
				fetchRecipes();
			})
			.catch((err) => {
				console.log(err);
			});
	};

const listOfRecipes = theRecipes.map((eachRecipe)=>{

return(<div key={eachRecipe._id} className="list">
<Link to={"/recipes/"+eachRecipe._id}>
<h3>{eachRecipe.name}</h3> </Link>
<button
onClick={() => {
deleteRecipe(eachRecipe._id); 
}} >Delete This Recipe</button>

</div>)
})

return(
   <div className="list-container">
       <center>
       <h1>Your Recipes</h1>
       {listOfRecipes}
	   <br></br>
	   <br></br>
       <button className='add-button'><Link to={"/recipes/create"}>Add a Recipe</Link></button>
	   </center>
    </div>
    )
}