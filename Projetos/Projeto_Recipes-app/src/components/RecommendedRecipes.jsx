import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { fetchAllDrinkRecipes } from '../services/fetchDrinkRecipes';
import { fetchAllFoodRecipes } from '../services/fetchFoodRecipes';

function RecommendedRecipes({ isFood }) {
  const [recommendedRecipes, setRecommendedRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      if (isFood) {
        const recipes = await fetchAllDrinkRecipes();
        return setRecommendedRecipes(recipes.drinks);
      }
      const recipes = await fetchAllFoodRecipes();
      return setRecommendedRecipes(recipes.meals);
    };
    getRecipes();
  }, []);

  const limitCardsValue = 6;

  return (
    <div
      className="d-flex vw-100"
      style={ { overflowY: 'scroll', gap: '0.5rem' } }
    >
      {(recommendedRecipes !== []) && recommendedRecipes
        .slice(0, limitCardsValue).map((recipe, index) => (
          <Card
            style={ { minWidth: '55vw' } }
            data-testid={ `${index}-recomendation-card` }
            bg="white"
            border="dark"
            key={ index }
          >
            <Card.Img
              style={ { width: '100', alignSelf: 'center', marginTop: '-9px' } }
              variant="top"
              src={ !isFood ? recipe.strMealThumb : recipe.strDrinkThumb }
            />

            <Card.Body className="px-2 pt-4 pb-1">
              <Card.Subtitle className="mb-2 text-muted">
                { !isFood ? recipe.strCategory : recipe.strAlcoholic }
              </Card.Subtitle>

              <Card.Title
                data-testid={ `${index}-recomendation-title` }
                style={ { color: 'black', fontSize: '25px' } }
              >
                { !isFood ? recipe.strMeal : recipe.strDrink }
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

RecommendedRecipes.propTypes = {
  isFood: PropTypes.bool.isRequired,
};

export default RecommendedRecipes;
