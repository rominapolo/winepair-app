import React from 'react'
import {Link} from "react-router-dom";

export default function AllWines({theWines}) {

console.log(theWines);

const listOfWines = theWines.map((eachWine)=>{

return(<div key={eachWine._id} className="wine-list">
<Link to={"/wines/"+eachWine._id}>
<h3>{eachWine.name}</h3> </Link>
</div>)
})


return(
   <div className="wine-list-container">
       <h1>Your Wines</h1>
       {listOfWines}
       <Link to={"/wines/create"}>Add a Wine</Link>
    </div>
    )
}