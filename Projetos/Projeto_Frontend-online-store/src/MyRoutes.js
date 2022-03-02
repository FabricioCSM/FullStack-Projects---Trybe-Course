import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import { getProductsById } from './services/api';

class MyRoutes extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItemsObject: {},
    };
    this.addItem = this.addItem.bind(this);
  }

  async addItem(click) {
    click.preventDefault();
    const clickedId = click.target.id;
    const { cartItemsObject } = this.state;
    let quantityInCart = 1;
    const result = await getProductsById(clickedId);
    if (cartItemsObject[clickedId]) {
      quantityInCart = cartItemsObject[clickedId].quantity + 1;
    }
    result.quantity = quantityInCart;
    console.log(result);
    // console.log(cartItemsObject);
    this.setState({ cartItemsObject: { ...cartItemsObject, [clickedId]: result } });
  }

  render() {
    const { cartItemsObject } = this.state;
    return (
      <Switch>
        <Route exact path="/" render={ () => <Home addItem={ this.addItem } /> } />
        <Route
          exact
          path="/cart"
          render={ () => <ShoppingCart cartItemsObject={ cartItemsObject } /> }
        />
        <Route
          exact
          path="/product/:id"
          render={ (props) => <ProductDetails { ...props } addItem={ this.addItem } /> }
        />
      </Switch>
    );
  }
}

export default MyRoutes;
