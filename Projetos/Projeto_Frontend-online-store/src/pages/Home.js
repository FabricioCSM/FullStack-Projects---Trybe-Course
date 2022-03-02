import React from 'react';
import PropTypes from 'prop-types';
import {
  getCategories,
  getProductsByQuery,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import SearchProduct from './SearchProduct';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categorylist: [],
      productSearch: '',
      searchResult: [],
      noResults: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.searchProduct = this.searchProduct.bind(this);
    this.onCategoryClick = this.onCategoryClick.bind(this);
  }

  componentDidMount() {
    getProductsByQuery('computador').then((response) => {
      this.setState(({
        searchResult: response.results,
        noResults: false,
      }));
    });
    getCategories()
      .then((response) => {
        this.setState({
          categorylist: [...response],
        });
      });
  }

  onInputChange({ target: { value } }) {
    this.setState(({
      productSearch: value,
    }));
  }

  onCategoryClick(event) {
    const { target: { id } } = event;
    const { productSearch } = this.state;
    getProductsFromCategoryAndQuery(id, productSearch)
      .then((response) => {
        this.setState(({
          searchResult: response.results,
          noResults: response.length === 0,
        }));
      });
  }

  async searchProduct() {
    const { productSearch } = this.state;
    const results = await getProductsByQuery(productSearch);
    this.setState(({
      searchResult: results.results,
      noResults: results.length === 0,
    }));
  }

  render() {
    const { productSearch, searchResult, noResults, categorylist } = this.state;
    const { addItem } = this.props;
    return (
      <div className="homeScreen">
        <Header />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            data-testid="query-input"
            onChange={ this.onInputChange }
            value={ productSearch }
          />
          <button
            className="search-btn"
            type="submit"
            data-testid="query-button"
            onClick={ this.searchProduct }
          >
            Procurar
          </button>
        </div>
        <div className="home">
          <aside>
            <div className="listaCategorias" id="lista-de-categorias">
              { categorylist.map((category) => (
                <input
                  type="button"
                  className="category-item"
                  key={ category.id }
                  data-testid="category"
                  id={ category.id }
                  value={ category.name }
                  onClick={ this.onCategoryClick }
                />
              )) }
            </div>
          </aside>
          { noResults ? <p>Nenhum produto foi encontrado</p>
            : (
              <div className="product-area">
                { searchResult
                  .map((product) => (
                    <form className="product-container" key={ product.id }>
                      <SearchProduct
                        key={ product.id }
                        product={ product }
                      />
                      <button
                        type="submit"
                        id={ product.id }
                        className="addCart"
                        onClick={ addItem }
                        data-testid="product-add-to-cart"
                      >
                        Add to Cart
                      </button>
                    </form>
                  )) }
              </div>
            ) }
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

Home.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Home;
