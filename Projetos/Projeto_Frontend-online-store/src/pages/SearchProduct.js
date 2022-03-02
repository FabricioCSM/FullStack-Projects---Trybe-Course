import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchProduct extends React.Component {
  constructor() {
    super();
    this.changeImageSize = this.changeImageSize.bind(this);
  }

  changeImageSize(imgLink) {
    const noSize = imgLink.split('I.jpg');
    const biggerImg = noSize.join('W.jpg');
    return biggerImg;
  }

  render() {
    const { product } = this.props;
    const path = `/product/${product.id}`;

    return (
      <Link className="text-link" to={ path } data-testid="product-detail-link">
        <div data-testid="product" className="productStyle">
          <div className="image-container">
            <img src={ this.changeImageSize(product.thumbnail) } alt={ product.title } />
          </div>
          <div className="name-container">
            <h4>{product.title}</h4>
            <h4 className="product-price">{ `R$${product.price}` }</h4>
          </div>
        </div>
      </Link>
    );
  }
}

SearchProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default SearchProduct;
