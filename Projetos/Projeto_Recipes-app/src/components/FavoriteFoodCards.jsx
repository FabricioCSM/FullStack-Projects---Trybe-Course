import React, { useContext, useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import { readFavoritesRecipes, saveFavoriteRecipes } from '../helpers/setLocalStorage';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import AppContext from '../context/AppContext';

function FavoriteFoodCards() {
  const { recipesType, setRecipesType } = useContext(AppContext);
  const [lastUnfavorite, setLastUnfavorite] = useState(false);
  const [copyLink, setCopyLink] = useState(false);
  const history = useHistory();

  // Lógica de Código retirada em https://www.kindacode.com/article/react-copy-to-clipboard-when-click-a-button-link/
  const copy = async (target) => {
    console.log(target);
    await navigator.clipboard.writeText(target);
    setCopyLink(true);
  };

  const handleClick = (target) => {
    const favoriteRecipes = readFavoritesRecipes();
    saveFavoriteRecipes(favoriteRecipes.filter((e) => e.id !== target.id));
    setLastUnfavorite(!lastUnfavorite);
  };

  const handleRedirect = (food) => {
    console.log(food.type);
    if (food.type === 'food') history.push(`/foods/${food.id}`);
    else (history.push(`/drinks/${food.id}`));
  };

  const allRecipes = readFavoritesRecipes();

  const filteredRecipes = recipesType === 'All' ? allRecipes : allRecipes
    .filter((recipes) => recipes.type === recipesType);

  useEffect(() => {
    setRecipesType('All');
  }, []);

  return (
    <Row
      xs={ 1 }
      md={ 2 }
      className="g-4"
      style={ {
        marginBottom: '80px',
        margin: '10px 0px' } }
    >
      {filteredRecipes.map((food, index) => (
        <Card
          data-testid={ `${index}-recipe-card` }
          bg="white"
          border="dark"
          key={ index }
          style={ { width: '5rem',
            height: '130px',
            display: 'flex',
            margin: '10px',
            borderRadius: '10px',
            flexDirection: 'row' } }
        >
          <input
            type="image"
            alt={ food.name }
            onClick={ () => handleRedirect(food) }
            style={ { width: '8rem', alignSelf: 'start', borderRadius: '10px' } }
            data-testid={ `${index}-horizontal-image` }
            variant="top"
            src={ food.image }
          />
          <section style={ { display: 'flex', flexDirection: 'column' } }>
            <Card.Text
              data-testid={ `${index}-horizontal-top-text` }
              className="mb-2 text-muted"
              style={ { alignSelf: 'start', margin: '5px 15px' } }
            >
              {food.nationality}
              {food.nationality ? ' - ' : null}
              {food.category}
              {' - '}
              {food.alcoholicOrNot}
            </Card.Text>
            <Card.Text
              data-testid={ `${index}-horizontal-name` }
              onClick={ () => handleRedirect(food) }
              className="mb-2 text-muted"
              style={ { alignSelf: 'start', margin: '5px 15px' } }
            >
              {food.name}
            </Card.Text>
            <section style={ { display: 'flex', flexDirection: 'row' } }>
              <input
                style={ {
                  width: '40px',
                  height: '40px',
                  margin: '15px' } }
                type="image"
                alt="compartilharReceita"
                src={ shareIcon }
                onClick={ () => copy(`http://localhost:3000/foods/${food.id}`) }
                data-testid={ `${index}-horizontal-share-btn` }
              />
              {copyLink && <p>Link copied!</p>}
              <input
                style={ {
                  width: '40px',
                  height: '40px',
                  margin: '15px' } }
                type="image"
                alt="compartilharReceita"
                src={ blackHeartIcon }
                onClick={ () => handleClick(food) }
                data-testid={ `${index}-horizontal-favorite-btn` }
              />
            </section>
          </section>

        </Card>
      ))}
    </Row>
  );
}

export default FavoriteFoodCards;
