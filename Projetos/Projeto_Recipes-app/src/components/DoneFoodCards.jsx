import React, { useContext, useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import shareIcon from '../images/shareIcon.svg';
import AppContext from '../context/AppContext';

function DoneFoodCards() {
  const { recipesType, setRecipesType } = useContext(AppContext);
  const [copyLink, setCopyLink] = useState(false);

  // Lógica de Código retirada em https://www.kindacode.com/article/react-copy-to-clipboard-when-click-a-button-link/
  const copy = async (target) => {
    await navigator.clipboard.writeText(target);
    setCopyLink(true);
  };

  const allRecipes = [
    {
      id: '52771',
      type: 'food',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '178319',
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '23/06/2020',
      tags: [],
    },
  ];

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
          // onClick={ () => redirectTo(food) }
          data-testid={ `${index}-recipe-card` }
          bg="white"
          border="dark"
          key={ index }
          style={ { width: '5rem',
            height: '160px',
            display: 'flex',
            margin: '10px',
            borderRadius: '10px',
            flexDirection: 'row' } }
        >
          <Card.Img
            style={ { width: '8rem',
              height: '158px',
              alignSelf: 'start',
              borderRadius: '10px' } }
            data-testid={ `${index}-horizontal-image` }
            variant="top"
            src={ food.image }
          />
          <section style={ { display: 'flex', flexDirection: 'column' } }>
            <Card.Text
              data-testid={ `${index}-horizontal-top-text` }
              className="mb-2 text-muted"
              style={ { alignSelf: 'start', margin: '10px 15px' } }
            >
              {food.nationality}
              {food.nationality ? ' - ' : null}
              {food.category}
              {' - '}
              {food.alcoholicOrNot}
            </Card.Text>
            <Card.Text
              data-testid={ `${index}-horizontal-name` }
              className="mb-2 "
              style={ { alignSelf: 'start', margin: '10px 15px' } }
            >
              {food.name}
            </Card.Text>
            <Card.Text
              data-testid={ `${index}-horizontal-done-date` }
              className="mb-2 "
              style={ { alignSelf: 'start', margin: '5px 15px' } }
            >
              Done in
              {' '}
              {food.doneDate}
            </Card.Text>
            <section
              style={ { display: 'flex',
                flexDirection: 'row',
                marginLeft: '8px' } }
            >
              {food.tags.map((tag, indexTag) => (
                <Card.Text
                  key={ indexTag }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                  style={ {
                    alignSelf: 'start',
                    margin: '5px 2px',
                    fontSize: '12px',
                    width: 'max-content',
                    padding: '5px',
                    backgroundColor: 'pink',
                    borderRadius: '10px' } }
                >
                  {tag}
                </Card.Text>
              ))}
            </section>
          </section>
          <input
            style={ {
              width: '40px',
              height: '40px',
              left: '87%',
              position: 'absolute' } }
            type="image"
            alt="compartilharReceita"
            src={ shareIcon }
            onClick={ () => copy(`http://localhost:3000/foods/${food.id}`) }
            data-testid={ `${index}-horizontal-share-btn` }
          />
          {copyLink && <p>Link copied!</p>}
        </Card>
      ))}
    </Row>
  );
}

export default DoneFoodCards;
