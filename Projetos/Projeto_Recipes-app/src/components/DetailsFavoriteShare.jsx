import React, { useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { readFavoritesRecipes, saveFavoriteRecipes, setLocalStorage,
} from '../helpers/setLocalStorage';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FavoriteAndShare({ favoriteRecipe, favorite, setFavorite }) {
  const [copyLink, setCopyLink] = useState(false);
  const { path } = useRouteMatch();
  const isfoodPath = path.includes('/foods') ? '/foods' : '/drinks';
  const { recipeId } = useParams();

  const copy = async (target) => {
    console.log(target);
    await navigator.clipboard.writeText(target);
    setCopyLink(true);
  };

  const handleFavorite = () => {
    const teste2 = !JSON.parse(localStorage.getItem('favoriteRecipes'))
    && setLocalStorage('favoriteRecipes', JSON.stringify([]));
    console.log(teste2);

    if (!favorite) {
      const favoriteRecipes = readFavoritesRecipes();
      setFavorite(!favorite);
      return saveFavoriteRecipes([...favoriteRecipes, favoriteRecipe]);
    }

    const favoriteRecipes = readFavoritesRecipes();
    saveFavoriteRecipes(favoriteRecipes.filter((recipeFav) => recipeFav.id !== recipeId));
    setFavorite(!favorite);
  };

  return (
    <div>
      <input
        type="image"
        onClick={ () => copy(`http://localhost:3000${isfoodPath}/${recipeId}`) }
        src={ shareIcon }
        alt="icone de compartilhar"
        data-testid="share-btn"
      />
      {copyLink && <p>Link copied! </p>}
      <input
        type="image"
        onClick={ handleFavorite }
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
        alt="icone de coração vazio"
        data-testid="favorite-btn"
      />
    </div>
  );
}

FavoriteAndShare.propTypes = {
  favorite: PropTypes.bool.isRequired,
  setFavorite: PropTypes.func.isRequired,
  favoriteRecipe: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
