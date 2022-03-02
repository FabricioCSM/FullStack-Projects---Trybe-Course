import React from 'react';
import PropTypes from 'prop-types';
import { getProductsById } from '../services/api';
import CommentBox from '../components/CommentBox';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ProductDetails.css';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
      attributes: [],
      loading: false,
      newImage: '',
    };

    this.getProductDetail = this.getProductDetail.bind(this);
    this.changeImageSize = this.changeImageSize.bind(this);
  }

  componentDidMount() {
    this.getProductDetail();
  }

  async getProductDetail() {
    const {
      match: {
        params: {
          id,
        },
      } } = this.props;
    this.setState({
      loading: true,
    }, async () => {
      const product = await getProductsById(id);
      this.setState({
        productInfo: product,
        attributes: product.attributes,
        loading: false,
      });
      this.changeImageSize();
    });
  }

  changeImageSize() {
    const { productInfo: { thumbnail } } = this.state;
    const noSize = thumbnail.split('I.jpg');
    const biggerImg = noSize.join('W.jpg');
    this.setState({
      newImage: biggerImg,
    });
  }

  render() {
    const {
      productInfo: {
        title,
        price,
      },
      loading,
      attributes,
      newImage,
    } = this.state;
    const { match: { params: { id } }, addItem } = this.props;
    return (
      <div className="mainPage" data-testid="product-detail-name">
        { loading ? <p>Carregando...</p>
          : (
            <div>
              <Header />
              <div className="productContainer">
                <img className="productImg" src={ newImage } alt={ title } />
                <div className="productMainInfoProperties">
                  <h2>{ title }</h2>
                  <p className="productPrice">{ `R$ ${price}` }</p>
                  <button
                    type="button"
                    id={ id }
                    className="addToCart"
                    onClick={ addItem }
                    data-testid="product-detail-add-to-cart"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              <h3 className="attributesTitle">Descrição do Produto</h3>
              { attributes.map((att, index) => (
                <table className="attributes" key={ index }>
                  <tbody>
                    <tr>
                      <td>{ att.name }</td>
                    </tr>
                    <tr>
                      <td>{ att.value_name }</td>
                    </tr>
                  </tbody>
                </table>)) }
              <CommentBox productId={ id } />
            </div>
          ) }
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  addItem: PropTypes.func.isRequired,
};

export default ProductDetails;
