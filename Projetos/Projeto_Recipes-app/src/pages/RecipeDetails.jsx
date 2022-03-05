import React, { useEffect, useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import AppContext from '../context/AppContext';
import addEmbed from '../helpers/addEmbed';
import { fetchFoodById } from '../services/fetchFoodRecipes';
import RecipeIngredients from '../components/RecipeIngredients';
import { fetchDrinkById } from '../services/fetchDrinkRecipes';
import RecommendedRecipes from '../components/RecommendedRecipes';
import { readFavoritesRecipes } from '../helpers/setLocalStorage';
import DetailsImage from '../components/DetailsImage';
import DetailsTitle from '../components/DetailsTitle';
import DetailsCategory from '../components/DetailsCategory';
import FavoriteAndShare from '../components/DetailsFavoriteShare';

function RecipeDetails() {
  const { recipe, setRecipe } = useContext(AppContext);
  const [favoriteRecipe, setFavoriteRecipe] = useState([]);
  const [favorite, setFavorite] = useState(false);

  const history = useHistory();
  const { recipeId } = useParams();
  const { path } = useRouteMatch();

  const isFood = path.includes('/foods');
  const redirect = isFood ? `/foods/${recipeId}/in-progress`
    : `/drinks/${recipeId}/in-progress`;

  const getRecipeInfo = async (allFavoriteRecipes) => {
    if (isFood) {
      const { meals: [meal] } = await fetchFoodById(recipeId);
      setFavoriteRecipe({
        id: meal.idMeal,
        type: 'food',
        nationality: meal.strArea,
        category: meal.strCategory,
        alcoholicOrNot: '',
        name: meal.strMeal,
        image: meal.strMealThumb,
      });

      const teste = allFavoriteRecipes === null ? setFavorite(false)
        : setFavorite(allFavoriteRecipes.some((el) => el.id === recipeId));
      console.log(teste);
      return setRecipe(meal);
    }

    const { drinks: [drink] } = await fetchDrinkById(recipeId);
    setFavoriteRecipe({
      id: drink.idDrink,
      type: 'drink',
      nationality: '',
      category: drink.strCategory,
      alcoholicOrNot: drink.strAlcoholic,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
    });

    const teste = allFavoriteRecipes === null ? setFavorite(false)
      : setFavorite(allFavoriteRecipes.some((el) => el.id === recipeId));
    console.log(teste);
    setRecipe(drink);
  };

  useEffect(() => {
    getRecipeInfo(readFavoritesRecipes());
  }, []);

  return (
    recipe !== null && (
      <>
        <DetailsImage />

        <div className="d-flex justify-content-between">
          <DetailsTitle />

          <FavoriteAndShare
            favoriteRecipe={ favoriteRecipe }
            favorite={ favorite }
            setFavorite={ setFavorite }
            recipeId={ recipe.id }
          />
        </div>

        <DetailsCategory />

        <RecipeIngredients recipe={ recipe } isFood={ isFood } />

        <RecommendedRecipes isFood={ isFood } />

        <section>
          <h2>Instructions</h2>

          <p data-testid="instructions">{recipe.strInstructions}</p>
        </section>

        {isFood && (
          <iframe
            data-testid="video"
            title={ recipe.strMeal }
            type="text/html"
            width="100%"
            height="auto"
            src={ addEmbed(recipe.strYoutube) }
            frameBorder="0"
          />
        )}

        <Button
          onClick={ () => history.push(redirect) }
          className="fixed-bottom w-100"
          data-testid="start-recipe-btn"
          variant="primary"
        >
          Start recipe
        </Button>

      </>

    )
  );
}

export default RecipeDetails;
