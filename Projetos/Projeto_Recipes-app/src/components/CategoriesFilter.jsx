import React, { useContext, useEffect } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function CategoryFilter({ foodOrDrink }) {
  const { categories, setCategoryFilter, categoryFilter, getFoods, getDrinks,
    getFoodCategoriesList, getDrinkCategoriesList, getFoodsByCategory,
    getDrinksByCategory } = useContext(AppContext);

  const limitCardsValue = 5;
  const isItFood = foodOrDrink === '/foods';

  const getFoodsOrDrinks = (e) => (
    isItFood ? getFoodsByCategory(e) : getDrinksByCategory(e));

  const getCategories = () => (
    isItFood ? getFoodCategoriesList() : getDrinkCategoriesList());

  const handleClick = ({ target }) => {
    if (categoryFilter === target.value) return isItFood ? getFoods() : getDrinks();

    getFoodsOrDrinks(target.value);
    setCategoryFilter(target.value);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <ButtonGroup
      className="me-2"
      type="button"
      name="categories"
      style={ { margin: '15px' } }
    >
      <Button
        size="sm"
        data-testid="All-category-filter"
        variant="primary"
        onClick={ foodOrDrink === '/foods' ? getFoods : getDrinks }
        value="All"
      >
        All
      </Button>

      {categories.length > 0 && categories
        .slice(0, limitCardsValue).map((category, index) => (
          <Button
            size="sm"
            data-testid={ `${category}-category-filter` }
            variant="primary"
            key={ index }
            onClick={ handleClick }
            value={ category }
          >
            {category}
          </Button>
        ))}
    </ButtonGroup>
  );
}

CategoryFilter.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
};

export default CategoryFilter;
