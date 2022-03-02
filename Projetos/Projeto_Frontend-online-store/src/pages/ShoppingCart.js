import React from 'react';
import PropTypes from 'prop-types';
import { getProductsById } from '../services/api';
import Header from '../components/Header';
import './Cart.css';

class ShoppingCart extends React.Component {
  constructor(props) {
    super();
    const { cartItemsObject } = props;
    const arrayProps = Object.keys(cartItemsObject);
    const cartItemsArray = arrayProps.map((prop) => cartItemsObject[prop]);
    this.state = {
      cartItensArray: cartItemsArray,
    };
  }

  funcIncrementa = ({ target }) => {
    getProductsById(target.id)
      .then((Response) => {
        const preco = Response.price;

        const currentPrice = target.parentNode.nextElementSibling;
        const itemQuanty = target.previousSibling;
        const incrementa = String(itemQuanty
          .innerText = parseInt(itemQuanty.innerText, 10) + 1);
        const newPrice = `R$ ${(preco * parseInt(incrementa, 10)).toFixed(2)}`;
        currentPrice.innerText = newPrice;
        return (
          incrementa,
          newPrice
        );
      });
  }

  funcDecrementa = ({ target }) => {
    getProductsById(target.id)
      .then((response) => {
        const preco = response.price;

        const currentPrice = target.parentNode.nextElementSibling;
        const itemQuanty = target.nextSibling;
        if (parseInt(itemQuanty.innerText, 10) === 0) {
          const decrementa = '0';
          return decrementa;
        }
        const decrementa = String(itemQuanty
          .innerText = parseInt(itemQuanty.innerText, 10) - 1);
        const newPrice = `R$ ${(preco * parseInt(decrementa, 10)).toFixed(2)}`;
        currentPrice.innerText = newPrice;
        return (
          decrementa,
          newPrice
        );
      });
  }

  deleteItem = ({ target: { id } }) => {
    const { cartItensArray } = this.state;
    cartItensArray
      .splice(cartItensArray.find((element) => element.id === id));
    return cartItensArray;
  }

  render() {
    // const { cartItemsObject } = this.props;
    const { cartItensArray } = this.state;
    const ifTrue = (
      <div id="empty-cart">
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
    // const ifFalse = (
    //   <>
    //     <p
    //       className="quanty-cartItems"
    //     >
    //       { `Total de itens no carrinho: ${cartItensArray.length}` }
    //     </p>
    //     <p>
    //       {
    //         `Valor total do carrinho: R$ ${'oi'}`
    //       }
    //     </p>
    //   </>
    // );
    return (
      <div>
        <Header />
        <div className="div-cart">
          <main>
            { cartItensArray.length > 0
              && cartItensArray.map((item) => (
                <div key={ item.id } className="elements-cart">

                  <button
                    id={ item.id }
                    type="button"
                    onClick={ this.deleteItem }
                  >
                    X
                  </button>

                  <img src={ item.thumbnail } alt={ item.title } />
                  <p data-testid="shopping-cart-product-name">{ item.title }</p>
                  <div className="div-func-quanty">

                    <button
                      id={ item.id }
                      className="button-decrementa"
                      type="button"
                      data-testid="product-decrease-quantity"
                      onClick={ this.funcDecrementa }

                    >
                      -
                    </button>
                    <h5
                      className="item-quanty"
                      data-testid="shopping-cart-product-quantity"
                    >
                      { item.quantity }
                    </h5>
                    <button
                      id={ item.id }
                      className="button-incrementa"
                      type="button"
                      data-testid="product-increase-quantity"
                      onClick={ this.funcIncrementa }
                    >
                      +
                    </button>
                  </div>
                  <h4>{ `R$ ${item.price}` }</h4>
                </div>
              )) }
          </main>
          <div>
            { cartItensArray.length === 0 ? ifTrue : null }
          </div>
        </div>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartItemsObject: PropTypes.shape().isRequired,
};

export default ShoppingCart;
