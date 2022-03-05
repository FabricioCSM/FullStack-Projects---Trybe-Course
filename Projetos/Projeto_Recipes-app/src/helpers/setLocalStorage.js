export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const readFavoritesRecipes = () => JSON.parse(
  localStorage.getItem('favoriteRecipes'),
);

export const saveFavoriteRecipes = (obj) => localStorage.setItem(
  'favoriteRecipes', JSON.stringify(obj),
);
