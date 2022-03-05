import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { setLocalStorage } from '../helpers/setLocalStorage';

function LoginForm() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();
  const [buttonState, setButtonState] = useState(true);

  useEffect(() => {
    const isEmailValid = () => {
      const regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

      return regEmail.test(userInfo.email);
    };

    const validateButton = () => {
      const minLength = 6;
      const passwordIsValid = userInfo.password.length > minLength;

      if (passwordIsValid && isEmailValid()) return setButtonState(false);
      setButtonState(true);
    };

    validateButton();
  }, [userInfo]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleClick = () => {
    setLocalStorage('mealsToken', 1);
    setLocalStorage('cocktailsToken', 1);

    const userEmail = { email: userInfo.email };
    setLocalStorage('user', JSON.stringify(userEmail));

    history.push('/foods');
  };

  return (
    <Form className="p-5">
      <h2>Trybe Food</h2>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          data-testid="email-input"
          type="email"
          name="email"
          placeholder="example@email.com"
          onChange={ handleChange }
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="*******"
          onChange={ handleChange }
        />
      </Form.Group>

      <Button
        className="w-100"
        data-testid="login-submit-btn"
        type="submit"
        variant="primary"
        size="lg"
        disabled={ buttonState }
        onClick={ handleClick }
      >
        Enter
      </Button>
    </Form>
  );
}

export default LoginForm;
