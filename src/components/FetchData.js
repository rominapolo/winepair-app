import React, {useState} from 'react'
import axios from 'axios';

export default function FetchData() {
const [recipes,setRecipes] = useState([]);

const options = {
  method: 'GET',
  url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
  params: {query: 'cuban'},
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
        <div>
            <p>{theRecipe.title}</p>
        </div>
    )
})

  return (
    <div>
        <button onClick={handleSearch}>Search</button>
         {allRecipes}
    </div>
  )
}
