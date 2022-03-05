import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function DetailsCategory() {
  const { path } = useRouteMatch();
  const isFood = path.includes('/foods');
  const { recipe } = useContext(AppContext);

  return (
    <span data-testid="recipe-category">
      {isFood ? recipe.strCategory : recipe.strAlcoholic}
    </span>
  );
}
