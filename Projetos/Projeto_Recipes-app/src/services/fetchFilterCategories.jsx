export const fetchFoodCategories = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const fetchDrinkCategories = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export const fetchNationalitiesCategories = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};
