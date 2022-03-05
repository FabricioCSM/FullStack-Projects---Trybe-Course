import React from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {
  foodIngredientsArray,
  drinkIngredientsArray,
  measurementsArray,
} from '../variables/ingredientsAndMeasurements';

function RecipeIngredients({ recipe, isFood }) {
  const ingredientsArray = isFood ? foodIngredientsArray : drinkIngredientsArray;
  return (
    <section>
      <h2>Ingredients</h2>

      <ListGroup variant="flush">
        {ingredientsArray.filter((ingredient) => recipe[ingredient] !== null
        && recipe[ingredient] !== '').map((ingredient, index) => (
          <ListGroup.Item
            as="li"
            key={ ingredient }
            data-testid={ `${index}-ingredient-name-and-measure` }
            className="d-flex justify-content-between align-items-start"
          >
            <div>
              {recipe[ingredient]}
            </div>
            <Badge variant="primary" pill>
              {recipe[measurementsArray[index]]}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </section>
  );
}

RecipeIngredients.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  isFood: PropTypes.bool.isRequired,
};

export default RecipeIngredients;
