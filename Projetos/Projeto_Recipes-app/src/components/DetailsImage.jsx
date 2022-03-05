import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function DetailsImage() {
  const { path } = useRouteMatch();
  const isFood = path.includes('/foods');
  const { recipe } = useContext(AppContext);

  return (
    <img
      src={ isFood ? recipe.strMealThumb : recipe.strDrinkThumb }
      className="w-100"
      alt={ isFood ? recipe.strMeal : recipe.strDrink }
      data-testid="recipe-photo"
    />
  );
}
