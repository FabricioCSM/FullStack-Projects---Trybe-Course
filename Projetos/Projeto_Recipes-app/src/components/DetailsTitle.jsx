import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function DetailsTitle() {
  const { path } = useRouteMatch();
  const isFood = path.includes('/foods');
  const { recipe } = useContext(AppContext);

  return (
    <h2 data-testid="recipe-title">
      { isFood ? recipe.strMeal : recipe.strDrink }
    </h2>
  );
}
