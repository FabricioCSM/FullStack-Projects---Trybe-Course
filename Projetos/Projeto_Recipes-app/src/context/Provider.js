import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

import {
  fetchAllFoodRecipes, fetchFoodRecipesByFirstLetter, fetchFoodRecipesByIngredient,
  fetchFoodRecipesByName, fetchFoodRecipesByCategory, fetchFoodRecipesByNationalities,
} from '../services/fetchFoodRecipes';

import { fetchFoodCategories, fetchDrinkCategories,
} from '../services/fetchFilterCategories';

import { fetchAllDrinkRecipes, fetchDrinkRecipesByCategory, fetchDrinkRecipesByIngredient,
  fetchDrinkRecipesByFirstLetter, fetchDrinkRecipesByName,
} from '../services/fetchDrinkRecipes';

function Provider({ children }) {
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [ingredientFilter, setIngredientFilter] = useState('');
  const [categories, setCategories] = useState('');
  const [recipesType, setRecipesType] = useState('');
  const [recipe, setRecipe] = useState(null);

  const getFoods = async () => {
    const foodResults = await fetchAllFoodRecipes();
    setFoods(foodResults.meals);
    setCategoryFilter('');
  };

  const getDrinks = async () => {
    const drinksResults = await fetchAllDrinkRecipes();
    setDrinks(drinksResults.drinks);
  };

  const getDrinksByIngredient = async (ingredient) => {
    const drinksByIngredient = await fetchDrinkRecipesByIngredient(ingredient);
    setDrinks(drinksByIngredient.drinks);
  };

  const getFoodsByIngredient = async (ingredient) => {
    const foodsByIngredientResults = await fetchFoodRecipesByIngredient(ingredient);
    setFoods(foodsByIngredientResults.meals);
  };

  const getFoodsByName = async (name) => {
    const foodsByNameResults = await fetchFoodRecipesByName(name);
    setFoods(foodsByNameResults.meals);
  };

  const getFoodsByFirstLetter = async (firstLetter) => {
    const foodsByFirstLetterResults = await fetchFoodRecipesByFirstLetter(firstLetter);
    setFoods(foodsByFirstLetterResults.meals);
  };

  const getDrinksByName = async (name) => {
    const drinksByNameResults = await fetchDrinkRecipesByName(name);
    setDrinks(drinksByNameResults.drinks);
  };

  const getDrinksByFirstLetter = async (firstLetter) => {
    const drinksByFirstLetterResults = await fetchDrinkRecipesByFirstLetter(firstLetter);
    setDrinks(drinksByFirstLetterResults.drinks);
  };
  const getFoodCategoriesList = async () => {
    const foodCategoriesResult = await fetchFoodCategories();
    const categoryList = foodCategoriesResult.meals.map((el) => el.strCategory);
    setCategories(categoryList);
    return categories;
  };

  const getFoodsByCategory = async (category) => {
    const foodsByCategoryResults = await fetchFoodRecipesByCategory(category);
    setFoods(foodsByCategoryResults.meals);
  };

  const getFoodsByNationalities = async (nationality) => {
    const foodsByNationality = await fetchFoodRecipesByNationalities(nationality);
    setFoods(foodsByNationality.meals);
  };

  const getDrinkCategoriesList = async () => {
    const drinkCategoriesResult = await fetchDrinkCategories();
    const categoryList = drinkCategoriesResult.drinks.map((el) => el.strCategory);
    setCategories(categoryList);
    return categories;
  };

  const getDrinksByCategory = async (category) => {
    const drinksByCategoriesResult = await fetchDrinkRecipesByCategory(category);
    setDrinks(drinksByCategoriesResult.drinks);
  };

  const contextValue = {
    foods,
    getFoods,
    drinks,
    getDrinks,
    getDrinksByIngredient,
    getFoodsByIngredient,
    getFoodCategoriesList,
    getFoodsByCategory,
    getFoodsByNationalities,
    getDrinksByCategory,
    setFoods,
    getFoodsByName,
    getFoodsByFirstLetter,
    getDrinksByName,
    getDrinksByFirstLetter,
    setCategoryFilter,
    categories,
    categoryFilter,
    getDrinkCategoriesList,
    ingredientFilter,
    setIngredientFilter,
    recipesType,
    setRecipesType,
    recipe,
    setRecipe,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
