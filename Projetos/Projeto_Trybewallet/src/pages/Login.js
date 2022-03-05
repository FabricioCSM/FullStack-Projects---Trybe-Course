import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { signUser } from '../actions';
import './Login.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isAuthenticated: false,
      buttonLoginDisabled: true,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitInfo = this.onSubmitInfo.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  onSubmitInfo(data) {
    const { setUser } = this.props;
    setUser(data);
    this.setState({ isAuthenticated: true });
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => this.disableButton());
  }

  disableButton() {
    const minLength = 6;
    const { email, password } = this.state;
    if (email.includes('@') && password.length >= minLength && email.includes('.com')) {
      this.setState({
        buttonLoginDisabled: false,
      });
    } else {
      this.setState({
        buttonLoginDisabled: true,
      });
    }
  }

  render() {
    const {
      email,
      password,
      isAuthenticated, buttonLoginDisabled } = this.state;
    return (
      <main className="login">
        <h2 className="titleLogin">TrybeWallet</h2>
        <fieldset className="loginForm">
          <input
            label="email"
            placeholder="Email"
            type="email"
            data-testid="email-input"
            onChange={ this.handleInputChange }
            name="email"
            required
          />
          <input
            label="password"
            placeholder="Password"
            type="password"
            data-testid="password-input"
            onChange={ this.handleInputChange }
            value={ password }
            name="password"
            required
          />
          <button
            disabled={ buttonLoginDisabled }
            className="loginBtn"
            type="submit"
            onClick={ () => this.onSubmitInfo(email) }
          >
            Entrar
          </button>
          { isAuthenticated && <Redirect to="/carteira" /> }
        </fieldset>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (emailUser) => dispatch(signUser(emailUser)),
});

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
