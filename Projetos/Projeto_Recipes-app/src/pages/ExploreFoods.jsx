import React from 'react';
import { Button } from 'react-bootstrap';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import { fetchSurpriseMeal } from '../services/fetchSurpriseRecipes';
import ExploreFoodsIngredients from './ExploreFoodsIngredients';
import ExploreFoodsNationalities from './ExploreFoodsNationalities';

function ExploreFoods() {
  const history = useHistory();
  const { path } = useRouteMatch();

  const getSurpriseMeal = async () => {
    const surpriseMeal = await fetchSurpriseMeal();
    const { meals: [{ idMeal }] } = surpriseMeal;
    history.push(`/foods/${idMeal}`);
  };

  return (
    <Switch>
      <Route exact path={ path }>
        <div className="d-flex flex-column px-5">
          <Button
            className="mt-3"
            variant="primary"
            data-testid="explore-by-ingredient"
            onClick={ () => history.push(`${path}/ingredients`) }
          >
            By Ingredient
          </Button>

          <Button
            className="mt-3"
            variant="primary"
            data-testid="explore-by-nationality"
            onClick={ () => history.push(`${path}/nationalities`) }
          >
            By Nationality
          </Button>

          <Button
            onClick={ getSurpriseMeal }
            className="mt-3"
            variant="primary"
            data-testid="explore-surprise"
          >
            Surprise me!
          </Button>
        </div>
      </Route>

      <Route
        exact
        path={ `${path}/ingredients` }
        component={ ExploreFoodsIngredients }
      />

      <Route
        exact
        path={ `${path}/nationalities` }
        component={ ExploreFoodsNationalities }
      />
    </Switch>
  );
}

export default ExploreFoods;
