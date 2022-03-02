import React, { Component } from 'react';
import AlbumCard from '../components/AlbumCard';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import './Search.css';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      inputSearch: '',
      lastSearch: '',
      buttonsSearchDisabled: true,
      results: false,
      noResults: false,
      loading: false,
      resultArtist: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.searchArtist = this.searchArtist.bind(this);
  }

  onInputChange({ target: { value } }) {
    const minLength = 2;
    this.setState(({
      buttonsSearchDisabled: value.length < minLength,
      inputSearch: value,
    }));
  }

  searchArtist(target) {
    target.preventDefault();
    const { inputSearch } = this.state;
    this.setState({
      lastSearch: inputSearch,
      inputSearch: '',
      noResults: false,
      loading: true,
    }, async () => {
      const results = await searchAlbumsAPI(inputSearch);
      if (results.length === 0) {
        this.setState({
          noResults: true,
        });
      }
      this.setState({
        resultArtist: results,
        loading: false,
        results: true,
      });
    });
  }

  render() {
    const {
      buttonsSearchDisabled,
      resultArtist,
      loading,
      noResults,
      results,
      inputSearch,
      lastSearch } = this.state;
    return (
      <div className="searchContent" data-testid="page-search">
        <Header />
        <form className="searchForm">
          <input
            data-testid="search-artist-input"
            type="text"
            placeholder="Nome da Banda ou Artista"
            onChange={ this.onInputChange }
            name="inputSearch"
            value={ inputSearch }
          />
          <button
            disabled={ buttonsSearchDisabled }
            type="submit"
            data-testid="search-artist-button"
            onClick={ this.searchArtist }
          >
            Procurar
          </button>
        </form>
        { results ? (
          <div className="albums">
            { noResults ? <p>Nenhum álbum foi encontrado</p>
              : (
                <p>
                  Resultado de álbuns de:
                  {' '}
                  { lastSearch }
                </p>) }
            { loading ? <Loading />
              : (
                <div className="albunsList">
                  {resultArtist
                    .map((alb) => <AlbumCard key={ alb.collectionId } alb={ alb } />)}
                </div>) }
          </div>
        ) : null }
      </div>
    );
  }
}

export default Search;
