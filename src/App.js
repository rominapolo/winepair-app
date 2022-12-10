import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react';
import {Link, Route, Routes} from "react-router-dom"
import AllRecipes from './components/AllRecipes';
import AllWines from './components/AllWines';
import CreateRecipe from './components/CreateRecipe';
import CreateWine from './components/CreateWine';
import { UserProvider } from "./contexts/UserContext";
import EditWine from './components/EditWine';
import WineDetails from './components/WineDetails';
import RecipeDetails from './components/RecipeDetails';
import EditRecipe from './components/EditRecipe';

function App() {

const [theRecipes, setTheRecipes] = useState([]);
const [theWines, setTheWines] = useState([]);


const fetchRecipes = () => {
  axios.get('http://localhost:4200/recipes') 
  .then((recipesFromDb) => { 
    console.log(recipesFromDb.data) 
    setTheRecipes(recipesFromDb.data);
  })
  .catch((err) => {
    console.log(err)
  });
  }

const fetchWines = () => {
  axios.get('http://localhost:4200/wines')
  .then((winesFromDb) => {
    console.log(winesFromDb)
    setTheWines(winesFromDb.data);
  })
  .catch((err) => {
    console.log(err)
  });
  }

  useEffect(() => {
  fetchRecipes();
  fetchWines();
}, []);

console.log(theRecipes);
console.log(theWines);
if (!theRecipes||!theWines){
  return "loading"

}
  return (
    <div className="App">

    <UserProvider>

    <Link to = "/" >HOME</Link> 

    <h1>PairWithMe</h1>
    <h3>Recipes & Wines</h3>
    
    <Link to = "/recipes" >All Recipes</Link> | <Link to = "/recipes/create" >Add a Recipe</Link>
     <br></br>
    <br></br>
    <Link to ="/wines" >Wine List</Link> |  <Link to ="/wines/create" >Add a Wine</Link>
    <br></br>
    <br></br>

    <Routes>

    <Route path="/recipes" element={<AllRecipes theRecipes={theRecipes} 
    fetchRecipes={fetchRecipes} />} />

    <Route path="/wines" element={<AllWines theWines={theWines} 
    fetchWines={fetchWines} />} />
    
    <Route path="/recipes/create" element = {<CreateRecipe fetchRecipes={fetchRecipes} theWines={theWines} />} /> 

    <Route path="/recipes/:id" element = {<RecipeDetails fetchRecipes={fetchRecipes} theWines={theWines} />} />
    

    <Route path="/wines/create" element = {<CreateWine fetchWines={fetchWines} />} />

    <Route path="/wines/:id" element = {<WineDetails fetchWines={fetchWines}/>} />

    <Route path="/wines/edit/:id" element = {<EditWine />} />

  
    </Routes>

    </UserProvider>

    
    </div>
  );

}

export default App;