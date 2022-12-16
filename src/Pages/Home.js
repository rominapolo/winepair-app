import React, {useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
const [search, setSearch] = useState("");
const [recipes,setRecipes] = useState([]);

const options = {
  method: 'GET',
  url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
  params: {query: (search)},
  headers: {
    'X-RapidAPI-Key': '5ad78fcc07msh1dbf09ae9d98fcdp18c3e6jsn581087aca3f0',
    'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
  }
};

const handleSearch = ()=> {
    axios.request(options).then(function (response) {
        console.log(response.data);
        setRecipes(response.data)
    }).catch(function (error) {
        console.error(error);
    }); 
}


const allRecipes=recipes.map((theRecipe)=> {
    return (
        <div key={theRecipe.title} className="api-list">
            <Link to={"/recipes/"+theRecipe.title}>
            <h3>+ {theRecipe.title}</h3></Link>
        </div>
    )
})

  return (
    <div className='header'>
    <center>
        <h1>Search Recipes</h1>
        <input className="search-bar" type="search" value={search}placeholder="search recipes" onChange={(e)=> setSearch(e.target.value)}/>

        <button onClick={handleSearch}>Search</button>

        <div className='search-results'>
         {allRecipes}
         </div>
    <div className='button-container'>
        <button><Link to = "/recipes/create" >Add a Recipe</Link></button>
        <button><Link to ="/wines/create" >Add a Wine</Link></button>
    </div>
    </center>
    </div>
  )
}
