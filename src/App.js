import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react';
import {Link, Route, Routes} from "react-router-dom"
import AllRecipes from './components/AllRecipes';
import AllWines from './components/AllWines';
import CreateRecipe from './components/CreateRecipe';
import CreateWine from './components/CreateWine';
import EditWine from './components/EditWine';
import WineDetails from './components/WineDetails';
import RecipeDetails from './components/RecipeDetails';
import FetchData from './components/FetchData';
import NavBar from './components/NavBar';
import Home from './Pages/Home';

function App() {

const [theRecipes, setTheRecipes] = useState([]);
const [theWines, setTheWines] = useState([]);



  // const getUserInfo = () =>{
  //   axios.get("http://localhost:4200/serializeuser", {withCredentials: true})
  //   .then((response)=>{
  //     setTheUser(response.data);
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }

  // useEffect(()=>{
  //   getUserInfo();
  // }, [])


  // const logout = () =>{
  //   axios.post("http://localhost:4200/logout",{}, {withCredentials: true})
  //   .then((response)=>{
  //     console.log(response.data)
  //     if(response.data.message === "successfully logged out")setTheUser(null);
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }


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
  <div className="main">

    <NavBar />

    <Routes>

    <Route path="/data" element={<FetchData />} />

    <Route path="/recipes" element={<AllRecipes theRecipes={theRecipes} 
    fetchRecipes={fetchRecipes} />} />

    <Route path="/wines" element={<AllWines theWines={theWines} 
    fetchWines={fetchWines} />} />
    
    <Route path="/recipes/create" element = {<CreateRecipe fetchRecipes={fetchRecipes} theWines={theWines} />} /> 

    <Route path="/recipes/:id" element = {<RecipeDetails fetchRecipes={fetchRecipes} theWines={theWines} />} />

    <Route path="/wines/create" element = {<CreateWine fetchWines={fetchWines} />} />

    <Route path="/wines/:id" element = {<WineDetails fetchWines={fetchWines}/>} />

    <Route path="/wines/edit/:id" element = {<EditWine />} />

    <Route path="/" element = {<Home />} />

    </Routes>


    
    </div>
  );

}

export default App;