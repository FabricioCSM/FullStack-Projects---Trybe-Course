import React, { useEffect, useState } from 'react';
import IngredientCard from '../components/IngredientCard';
import { fetchMealIngredients } from '../services/fetchIngredients';

function ExploreFoodsIngredients() {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = async () => {
    const { meals } = await fetchMealIngredients();
    const indexLimit = 12;
    setIngredients(meals.slice(0, indexLimit));
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const ingredientsLoaded = ingredients.length > 0;

  return (
    <div className="d-flex flex-column align-items-center px-5 flex-wrap">
      {ingredientsLoaded && ingredients.map(({ strIngredient }, index) => (
        <IngredientCard
          indexNumber={ index }
          title={ strIngredient }
          key={ strIngredient }
        />))}
    </div>
  );
}

export default ExploreFoodsIngredients;
