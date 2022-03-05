import React from 'react';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ExploreFoods from './ExploreFoods';
import ExploreDrinks from './ExploreDrinks';

function Explore() {
  const history = useHistory();
  const { path } = useRouteMatch();

  return (
    <main className="w-100">
      <Header />

      <Switch>
        <Route exact path={ path }>
          <div className="d-flex flex-column px-5">
            <Button
              className="mt-3"
              variant="primary"
              data-testid="explore-foods"
              onClick={ () => history.push(`${path}/foods`) }
            >
              Explore Foods
            </Button>

            <Button
              className="mt-3"
              variant="primary"
              data-testid="explore-drinks"
              onClick={ () => history.push(`${path}/drinks`) }
            >
              Explore Drinks
            </Button>
          </div>
        </Route>

        <Route path={ `${path}/foods` } component={ ExploreFoods } />

        <Route path={ `${path}/drinks` } component={ ExploreDrinks } />
      </Switch>

      <Footer />
    </main>
  );
}

export default Explore;
