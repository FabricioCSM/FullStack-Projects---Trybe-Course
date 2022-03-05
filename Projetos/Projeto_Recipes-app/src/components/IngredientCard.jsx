import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouteMatch, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

function IngredientCard({ title, indexNumber }) {
  const { getFoodsByIngredient, getDrinksByIngredient, setIngredientFilter,
  } = useContext(AppContext);
  const history = useHistory();
  const { path } = useRouteMatch();
  const isItDrink = path === '/explore/drinks/ingredients';

  const handleClick = (ingredient) => {
    if (isItDrink) {
      setIngredientFilter(ingredient);
      history.push('/drinks');
      getDrinksByIngredient(ingredient);
    } else {
      setIngredientFilter(ingredient);
      history.push('/foods');
      getFoodsByIngredient(ingredient);
    }
  };

  return (
    <Card
      style={ { width: '100%' } }
      data-testid={ `${indexNumber}-ingredient-card` }
      onClick={ () => handleClick(title) }
    >
      <Card.Img
        variant="top"
        src={ `https://www.${isItDrink ? 'thecocktaildb' : 'themealdb'}.com/images/ingredients/${title}-Small.png` }
        data-testid={ `${indexNumber}-card-img` }
      />

      <Card.Body>
        <Card.Title data-testid={ `${indexNumber}-card-name` }>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

IngredientCard.propTypes = {
  title: PropTypes.string.isRequired,
  indexNumber: PropTypes.number.isRequired,
};

export default IngredientCard;
