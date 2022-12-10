import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';

export default function AllWines({theWines, fetchWines, eachWine}) {


const deleteWine = (theID) => {
		console.log(theID);
		axios
			.post("http://localhost:4200/wines/remove", { id: theID })
			.then((response) => {
				console.log(response);
				fetchWines();
			})
			.catch((err) => {
				console.log(err);
			});
	};

const listOfWines = theWines.map((eachWine)=>{

return(<div key={eachWine._id} className="wine-list">
<Link to={"/wines/"+eachWine._id}>
<h3>{eachWine.name}</h3> </Link>
<button
onClick={() => {
deleteWine(eachWine._id); 
}} >Delete This Wine</button>

</div>)
})


return(
   <div className="wine-list-container">
       <h1>Your Wines</h1>
       {listOfWines}
       <br></br>
       <br></br>
       <Link to={"/wines/create"}>Add a Wine</Link>
    </div>
    )
}