import React, { Component } from 'react';
import './Form.css';
import Proptypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(event) {
    const {
      onSaveButtonClick,
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    event.preventDefault();
    onSaveButtonClick({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      cardImage,
      hasTrunfo,
      onInputChange,
      isSaveButtonDisabled,
    } = this.props;
    const trunfo = (
      <input
        className="cardTrunfo"
        id="superCheckbox"
        type="checkbox"
        checked={ cardTrunfo }
        data-testid="trunfo-input"
        onChange={ onInputChange }
      />
    );

    return (
      <section className="formSection">
        <form className="formCard" onSubmit={ this.handleSave }>
          <input
            className="cardName"
            type="text"
            data-testid="name-input"
            placeholder="Nome da carta"
            value={ cardName }
            onChange={ onInputChange }
          />
          <textarea
            className="cardDescription"
            type="text"
            data-testid="description-input"
            placeholder="Descrição da carta"
            value={ cardDescription }
            onChange={ onInputChange }
          />
          <label className="labelAtr" htmlFor="cardAttr1">
            Atributo 1
            <input
              className="cardAttr1"
              id="cardAttr1"
              type="number"
              data-testid="attr1-input"
              placeholder="Atributo 1"
              value={ parseInt((cardAttr1), 10) }
              onChange={ onInputChange }
            />
          </label>
          <label className="labelAtr" htmlFor="cardAttr1">
            Atributo 2
            <input
              className="cardAttr2"
              type="number"
              data-testid="attr2-input"
              placeholder="Atributo 2"
              value={ parseInt((cardAttr2), 10) }
              onChange={ onInputChange }
            />
          </label>
          <label className="labelAtr" htmlFor="cardAttr1">
            Atributo 3
            <input
              className="cardAttr3"
              type="number"
              data-testid="attr3-input"
              placeholder="Atributo 3"
              value={ parseInt((cardAttr3), 10) }
              onChange={ onInputChange }
            />
          </label>
          <input
            className="cardImage"
            type="text"
            data-testid="image-input"
            placeholder="URL da Imagem"
            value={ cardImage }
            onChange={ onInputChange }
          />
          <select
            className="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : trunfo }
          <button
            disabled={ isSaveButtonDisabled }
            type="submit"
            className="save-button"
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: Proptypes.string.isRequired,
  cardDescription: Proptypes.string.isRequired,
  cardAttr1: Proptypes.number.isRequired,
  cardAttr2: Proptypes.number.isRequired,
  cardAttr3: Proptypes.number.isRequired,
  cardImage: Proptypes.string.isRequired,
  cardRare: Proptypes.string.isRequired,
  cardTrunfo: Proptypes.bool.isRequired,
  isSaveButtonDisabled: Proptypes.bool.isRequired,
  hasTrunfo: Proptypes.bool.isRequired,
  onInputChange: Proptypes.func.isRequired,
  onSaveButtonClick: Proptypes.func.isRequired,
};

export default Form;
