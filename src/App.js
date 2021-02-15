import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Recipe from './Recipe.js';




function test() {
  console.log("Effect has been run");
}

// function App() {
const App = () => {
  const APP_ID = 'd90c7029';
  const APP_KEY = '567c082ac65ce7e5f3930f3ad0eb1d59';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState();
  const [query, setQuery] = useState('chicken');

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  useEffect(async () => {
    getRecipes();
    console.log("Effect has been run");
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">

      <img src={logo} className="App-logo" alt="logo" />
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch} />
        <button onClick={() => test()} className="search-button" type="submit">
          Search
          </button>
      </form>

      <div className="recipe">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
