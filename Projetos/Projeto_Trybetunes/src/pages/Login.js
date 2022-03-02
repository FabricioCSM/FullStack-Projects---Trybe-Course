import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
import './Login.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      buttonsSaveDisabled: true,
      isAuthenticated: false,
      loading: false,
    };
    this.loginUser = this.loginUser.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const minLength = 3;
    if (target.value.length >= minLength) {
      this.setState({
        name: target.value,
        buttonsSaveDisabled: false,
      });
      return;
    }
    this.setState({
      buttonsSaveDisabled: true,
    });
  }

  loginUser() {
    this.setState({
      loading: true,
    }, () => {
      createUser(this.state)
        .then(
          this.setState({
            isAuthenticated: true,
          }),
        );
    });
  }

  render() {
    const { buttonsSaveDisabled, isAuthenticated, name, loading } = this.state;
    return (
      <div className="loginForm" data-testid="page-login">
        {loading ? <Loading /> : null}
        <form className="formInputs">
          <input
            type="text"
            className="inputName"
            data-testid="login-name-input"
            placeholder="Insira o seu Nome"
            onChange={ this.onInputChange }
          />
          <button
            disabled={ buttonsSaveDisabled }
            className="inputButton"
            type="submit"
            data-testid="login-submit-button"
            onClick={ this.loginUser }
          >
            Entrar
          </button>
        </form>
        {/* Redirect to e objeto, visto em https://stackoverflow.com/questions/52064303/reactjs-pass-props-with-redirect-component */ }
        { isAuthenticated
          ? <Redirect to={ { pathname: '/search', state: name } } /> : null }
      </div>
    );
  }
}

export default Login;
