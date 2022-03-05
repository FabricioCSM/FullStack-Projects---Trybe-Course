import React from 'react';
import { Button } from 'react-bootstrap';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import { fetchSurpriseDrink } from '../services/fetchSurpriseRecipes';
import ExploreDrinksIngredients from './ExploreDrinksIngredients';
import ExploreDrinksNationalities from './ExploreDrinksNationalities';

function ExploreDrinks() {
  const history = useHistory();
  const { path } = useRouteMatch();

  const getSurpriseDrink = async () => {
    const surpriseDrink = await fetchSurpriseDrink();
    const { drinks: [{ idDrink }] } = surpriseDrink;
    history.push(`/drinks/${idDrink}`);
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
            onClick={ getSurpriseDrink }
            data-testid="explore-surprise"
          >
            Surprise me!
          </Button>
        </div>
      </Route>

      <Route
        exact
        path={ `${path}/ingredients` }
        component={ ExploreDrinksIngredients }
      />

      <Route
        exact
        path={ `${path}/nationalities` }
        component={ ExploreDrinksNationalities }
      />
    </Switch>
  );
}

export default ExploreDrinks;
