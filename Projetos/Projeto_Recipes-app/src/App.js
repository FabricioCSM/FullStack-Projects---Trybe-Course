import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import MainRecipes from './pages/MainRecipes';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import FoodsInProgress from './pages/FoodsInProgress';
import DrinksInProgress from './pages/DrinksInProgress';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />

      <Route exact path="/foods" component={ MainRecipes } />
      <Route exact path="/foods/:recipeId" component={ RecipeDetails } />
      <Route exact path="/foods/:recipeId/in-progress" component={ FoodsInProgress } />

      <Route exact path="/drinks" component={ MainRecipes } />
      <Route exact path="/drinks/:recipeId" component={ RecipeDetails } />
      <Route exact path="/drinks/:recipeId/in-progress" component={ DrinksInProgress } />

      <Route path="/explore" component={ Explore } />
    </Switch>
  );
}

export default App;
