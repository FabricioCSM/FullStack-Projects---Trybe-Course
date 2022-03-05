import React from 'react';
import FavoriteFoodCards from '../components/FavoriteFoodCards';
import FoodOrDrinkFilter from '../components/FoodOrDrinkFilter';
import Header from '../components/Header';

function FavoriteRecipes() {
  return (
    <main>
      <Header />
      <FoodOrDrinkFilter />
      <FavoriteFoodCards />
    </main>
  );
}

export default FavoriteRecipes;
