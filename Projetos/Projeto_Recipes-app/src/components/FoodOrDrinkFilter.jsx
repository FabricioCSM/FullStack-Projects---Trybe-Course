import React, { useContext } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import AppContext from '../context/AppContext';

function FoodOrDrinkFilter() {
  const { setRecipesType } = useContext(AppContext);

  const handleClick = ({ target }) => {
    setRecipesType(target.value);
  };

  return (
    <ButtonGroup
      className="me-2"
      type="button"
      name="categories"
      style={ { margin: '15px', display: 'flex' } }
    >
      <Button
        size="sm"
        data-testid="filter-by-all-btn"
        variant="primary"
        onClick={ handleClick }
        value="All"
      >
        All
      </Button>

      <Button
        size="sm"
        data-testid="filter-by-food-btn"
        variant="primary"
        onClick={ handleClick }
        value="food"
      >
        Food
      </Button>

      <Button
        size="sm"
        data-testid="filter-by-drink-btn"
        variant="primary"
        onClick={ handleClick }
        value="drink"
      >
        Drinks
      </Button>

    </ButtonGroup>
  );
}

export default FoodOrDrinkFilter;
