import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Footer from '../components/Footer';
import Header from '../components/Header';
import FoodCards from '../components/FoodCards';
import AppContext from '../context/AppContext';
import CategoryFilter from '../components/CategoriesFilter';

function MainRecipes({ match: { path } }) {
  const { getDrinks, getFoods, categoryFilter, ingredientFilter, foods, drinks,
  } = useContext(AppContext);

  const history = useHistory();

  useEffect(() => {
    if (path === '/foods' && categoryFilter === '' && ingredientFilter === '') getFoods();
    else if (categoryFilter === '' && ingredientFilter === '') getDrinks();
  }, []);

  useEffect(() => {
    const foodOrDrinks = path === '/foods' ? foods : drinks;
    const mealOrDrink = path === '/foods' ? 'idMeal' : 'idDrink';

    if (foodOrDrinks === null) return;
    if (foodOrDrinks.length === 1) {
      history.push(`${path}/${foodOrDrinks[0][`${mealOrDrink}`]}`);
    }
  }, [foods, drinks, history, path]);

  return (
    <main>
      <Header />
      <CategoryFilter foodOrDrink={ path } />
      <FoodCards foodOrDrink={ path } />
      <Footer />
    </main>
  );
}

MainRecipes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default MainRecipes;
