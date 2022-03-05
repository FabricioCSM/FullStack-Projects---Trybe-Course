import React from 'react';
import DoneFoodCards from '../components/DoneFoodCards';
import FoodOrDrinkFilter from '../components/FoodOrDrinkFilter';
import Header from '../components/Header';

function DoneRecipes() {
  return (
    <main>
      <Header />
      <FoodOrDrinkFilter />
      <DoneFoodCards />
    </main>
  );
}

export default DoneRecipes;
