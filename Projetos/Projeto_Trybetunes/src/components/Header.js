import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import './Header.css';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      loading: false,
    };

    this.getUserName = this.getUserName.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }

  componentDidMount() {
    this.setLoading();
  }

  componentDidUpdate() {
    this.getUserName();
  }

  setLoading() {
    this.setState({
      loading: true,
    });
  }

  async getUserName() {
    const { name } = await getUser();
    this.setState({
      name,
      loading: false,
    });
  }

  render() {
    const { name, loading } = this.state;
    return (
      <header className="header" data-testid="header-component">
        { loading ? <Loading />
          : (
            <p className="name" data-testid="header-user-name">{name}</p>
          )}
        <nav className="links">
          <Link
            className="searchLink"
            to="/search"
            data-testid="link-to-search"
          >
            Pesquisar
          </Link>
          <Link
            className="favoriteLink"
            to="/favorites"
            data-testid="link-to-favorites"
          >
            Favoritos
          </Link>
          <Link
            className="profileLink"
            to="/profile"
            data-testid="link-to-profile"
          >
            Perfil
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
