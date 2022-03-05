import React, { useState, useEffect } from 'react';
import IngredientCard from '../components/IngredientCard';
import { fetchDrinkIngredients } from '../services/fetchIngredients';

function ExploreDrinksIngredients() {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = async () => {
    const { drinks } = await fetchDrinkIngredients();
    const indexLimit = 12;
    setIngredients(drinks.slice(0, indexLimit));
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const ingredientsLoaded = ingredients.length > 0;

  return (
    <div className="d-flex flex-column align-items-center px-5 flex-wrap">
      {ingredientsLoaded && ingredients.map(({ strIngredient1 }, index) => (
        <IngredientCard
          indexNumber={ index }
          title={ strIngredient1 }
          key={ strIngredient1 }
        />))}
    </div>
  );
}

export default ExploreDrinksIngredients;
