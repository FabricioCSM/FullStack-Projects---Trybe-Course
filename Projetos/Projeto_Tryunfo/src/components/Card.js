import React, { Component } from 'react';
import './Form.css';
import './Card.css';
import Proptypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cN,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      cardImage,
      pre,
      onD,
    } = this.props;

    return (
      <div className="cards">
        <div className="cardNamePreview">
          <p data-testid="name-card">{ cN }</p>
          {cardTrunfo
            ? <p className="TPreview" data-testid="trunfo-card">Super Trunfo</p> : ''}
        </div>
        <img
          className="cardImagePreview"
          src={ cardImage }
          alt={ cN }
          data-testid="image-card"
        />
        <div className="attributes">
          <p
            className="cardDescriptionPreview"
            data-testid="description-card"
          >
            { cardDescription }
          </p>
          <p className="cardAttrPreview" data-testid="attr1-card">{ cardAttr1 }</p>
          <p className="cardAttrPreview" data-testid="attr2-card">{ cardAttr2 }</p>
          <p className="cardAttrPreview" data-testid="attr3-card">{ cardAttr3 }</p>
          <p className="rareCardPreview" data-testid="rare-card">{ cardRare }</p>

          {

            pre ? null : <button type="button" onClick={ () => onD(cN) }>Excluir</button>

          }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cN: Proptypes.string.isRequired,
  cardDescription: Proptypes.string.isRequired,
  cardAttr1: Proptypes.number.isRequired,
  cardAttr2: Proptypes.number.isRequired,
  cardAttr3: Proptypes.number.isRequired,
  cardImage: Proptypes.string.isRequired,
  cardRare: Proptypes.string.isRequired,
  cardTrunfo: Proptypes.bool.isRequired,
  pre: Proptypes.bool.isRequired,
  onD: Proptypes.func.isRequired,
};

export default Card;
