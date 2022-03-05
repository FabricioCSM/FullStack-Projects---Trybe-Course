import React, { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

function FoodCards({ foodOrDrink }) {
  const history = useHistory();
  const { foods, drinks, getFoods, getDrinks } = useContext(AppContext);
  const limitCardsValue = 12;
  const isItFood = foodOrDrink.includes('/foods');
  const foodOrDrinks = isItFood ? foods : drinks;

  const redirectTo = (food) => {
    if (isItFood) return history.push(`/foods/${food.idMeal}`);
    return history.push(`/drinks/${food.idDrink}`);
  };

  const displayAlert = () => {
    const alertMessage = 'Sorry, we haven\'t found any recipes for these filters.';
    if (foodOrDrink === '/drinks') getDrinks();
    else getFoods();
    global.alert(alertMessage);
  };

  return (
    <Row
      xs={ 2 }
      md={ 2 }
      className="g-4"
      style={ { marginBottom: '80px' } }
    >
      {(foodOrDrinks !== null) ? foodOrDrinks
        .slice(0, limitCardsValue).map((food, index) => (
          <Card
            onClick={ () => redirectTo(food) }
            data-testid={ `${index}-recipe-card` }
            bg="secondary"
            border="dark"
            key={ index }
            style={ { width: '5rem', padding: '10px' } }
          >
            <Card.Img
              style={ { width: '12rem', alignSelf: 'center', marginTop: '-9px' } }
              data-testid={ `${index}-card-img` }
              variant="top"
              src={ isItFood ? food.strMealThumb : food.strDrinkThumb }
            />

            <Card.Body>
              <Card.Title
                data-testid={ `${index}-card-name` }
                style={ { color: 'white', fontSize: '25px' } }
              >
                { isItFood ? food.strMeal : food.strDrink }
              </Card.Title>
            </Card.Body>
          </Card>
        )) : displayAlert()}
    </Row>
  );
}

FoodCards.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
};

export default FoodCards;
