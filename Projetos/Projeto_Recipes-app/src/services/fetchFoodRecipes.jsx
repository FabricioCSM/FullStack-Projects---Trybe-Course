export const fetchFoodById = async (id) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const fetchAllFoodRecipes = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const fetchFoodRecipesByIngredient = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const fetchFoodRecipesByName = async (name) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const fetchFoodRecipesByFirstLetter = async (letter) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const fetchFoodRecipesByCategory = async (category) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const fetchFoodRecipesByNationalities = async (nationality) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`,
  );
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};
