import React, { useContext, useEffect, useState } from 'react';
import { Container, FormControl, FormGroup, Nav, Navbar, Form, Button,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import { headerTitles, routesThatHaveSearch } from '../variables/headerVariables';

function Header() {
  const history = useHistory();

  const [showSearch, setShowSearch] = useState(false);

  const [searchConfigs, setSearchConfigs] = useState({
    selectedOption: '',
    typedValue: '',
  });

  const {
    getFoodsByIngredient,
    getFoodsByName,
    getFoodsByFirstLetter,
    getDrinksByIngredient,
    getDrinksByName,
    getDrinksByFirstLetter,
  } = useContext(AppContext);
  const [buttonState, setButtonState] = useState(true);

  const [isDrinks, setIsDrinks] = useState(false);

  useEffect(() => {
    const { pathname } = history.location;
    if (pathname === '/drinks') {
      setIsDrinks(true);
    }
  }, []);

  useEffect(() => {
    const validateButton = () => {
      if (searchConfigs.selectedOption !== '' && searchConfigs.typedValue !== '') {
        setButtonState(false);
      } else {
        setButtonState(true);
      }
    };
    validateButton();
  }, [searchConfigs]);

  const getTitleByPathName = () => {
    const { pathname } = history.location;
    return headerTitles[pathname];
  };

  const showIconBasedOnPath = () => {
    const { pathname } = history.location;
    return routesThatHaveSearch.includes(pathname);
  };

  const handleChange = ({ target }) => {
    setSearchConfigs({
      ...searchConfigs,
      typedValue: target.value,
    });
  };

  const handleRadioClick = ({ target }) => {
    setSearchConfigs({
      ...searchConfigs,
      selectedOption: target.id,
    });
  };

  const handleBtnClick = () => {
    const { typedValue } = searchConfigs;
    switch (searchConfigs.selectedOption) {
    case 'ingredient':
      if (isDrinks) getDrinksByIngredient(typedValue);
      else getFoodsByIngredient(typedValue);
      break;
    case 'name':
      if (isDrinks) getDrinksByName(typedValue);
      else getFoodsByName(typedValue);
      break;
    case 'first-letter':
      if (typedValue.length > 1) {
        global.alert('Your search must have only 1 (one) character');
        return;
      }
      if (isDrinks) getDrinksByFirstLetter(typedValue);
      else getFoodsByFirstLetter(typedValue);
      break;
    default: break;
    }
  };

  return (
    <Navbar bg="success" expand="sm">
      <Container>
        <Link to="/profile">
          <img
            src={ profileIcon }
            alt="icone de perfil"
            data-testid="profile-top-btn"
          />
        </Link>

        <h2 data-testid="page-title">{ getTitleByPathName() }</h2>

        {
          showIconBasedOnPath() && (
            <>
              <Navbar.Toggle
                onClick={ () => setShowSearch(!showSearch) }
                aria-controls="basic-navbar-nav"
              >
                <img
                  src={ searchIcon }
                  alt="icone de busca"
                  data-testid="search-top-btn"
                />
              </Navbar.Toggle>

              { showSearch && (
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <FormGroup>
                      <FormControl
                        placeholder="Search recipe"
                        data-testid="search-input"
                        onChange={ handleChange }
                      />
                    </FormGroup>
                    <div>
                      <Form.Check
                        inline
                        id="ingredient"
                        type="radio"
                        name="search-group"
                        label="Ingredient"
                        data-testid="ingredient-search-radio"
                        onClick={ handleRadioClick }
                      />
                      <Form.Check
                        inline
                        id="name"
                        type="radio"
                        name="search-group"
                        label="Name"
                        data-testid="name-search-radio"
                        onClick={ handleRadioClick }
                      />
                      <Form.Check
                        inline
                        id="first-letter"
                        type="radio"
                        name="search-group"
                        label="First Letter"
                        data-testid="first-letter-search-radio"
                        onClick={ handleRadioClick }
                      />
                    </div>
                    <Button
                      disabled={ buttonState }
                      data-testid="exec-search-btn"
                      type="button"
                      variant="success"
                      onClick={ handleBtnClick }
                    >
                      Search
                    </Button>
                  </Nav>
                </Navbar.Collapse>
              )}
            </>
          )
        }
      </Container>
    </Navbar>
  );
}

export default Header;
