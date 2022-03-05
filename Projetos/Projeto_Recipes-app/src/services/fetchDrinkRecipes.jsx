export const fetchDrinkById = async (id) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const fetchAllDrinkRecipes = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const fetchDrinkRecipesByIngredient = async (ingredient) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const fetchDrinkRecipesByName = async (name) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const fetchDrinkRecipesByFirstLetter = async (letter) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const fetchDrinkRecipesByCategory = async (category) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};
