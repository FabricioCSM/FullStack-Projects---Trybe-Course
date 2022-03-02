import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.trunfoCreated = this.trunfoCreated.bind(this);
    this.validateFields = this.validateFields.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onD = this.onD.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: false,
      cardImage: '',
      hasTrunfo: false,
      savedCards: [],
    };
  }

  onInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.className]: value,
    });
  }

  onSaveButtonClick(card) {
    if (card.cardTrunfo) this.trunfoCreated();
    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, card],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: false,
      cardImage: '',
    }));
  }

  onD(nameCard) {
    const { savedCards } = this.state;
    this.setState(() => ({
      savedCards: savedCards.filter((card) => card.cardName !== nameCard),
    }));
  }

  trunfoCreated() {
    this.setState({
      hasTrunfo: true,
    });
  }

  validateFields() {
    const {
      state: {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardRare,
        cardImage,
      },
    } = this;

    const maxValueAttribute = 90;
    const maxAttributes = 210;
    const attribute1 = parseInt((cardAttr1), 10);
    const attribute2 = parseInt((cardAttr2), 10);
    const attribute3 = parseInt((cardAttr3), 10);

    if (attribute1 > maxValueAttribute || attribute1 < 0) return true;
    if (attribute2 > maxValueAttribute || attribute2 < 0) return true;
    if (attribute3 > maxValueAttribute || attribute3 < 0) return true;
    if (attribute1 + attribute2 + attribute3 > maxAttributes) return true;
    if (cardName === '') return true;
    if (cardDescription === '') return true;
    if (cardImage === '') return true;
    if (cardRare === '') return true;

    return false;
  }

  render() {
    const {
      onInputChange,
      onSaveButtonClick,
      trunfoCreated,
      onD,
      state: {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardRare,
        cardTrunfo,
        cardImage,
        hasTrunfo,
        savedCards,
      },
    } = this;
    return (
      <div className="deck">
        <h1 className="title">Tryunfo</h1>
        <h2 className="addCardTitle">Adicionar Carta</h2>
        <div className="card-creation">
          <Form
            onInputChange={ onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ parseInt((cardAttr1), 10) }
            cardAttr2={ parseInt((cardAttr2), 10) }
            cardAttr3={ parseInt((cardAttr3), 10) }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ this.validateFields() }
            onSaveButtonClick={ onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            onInputChange={ onInputChange }
            cN={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ parseInt((cardAttr1), 10) }
            cardAttr2={ parseInt((cardAttr2), 10) }
            cardAttr3={ parseInt((cardAttr3), 10) }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            pre
          />
        </div>
        <div>
          <div className="savedCards">
            { savedCards.map((card, index) => (<Card
              key={ index }
              cN={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ parseInt((card.cardAttr1), 10) }
              cardAttr2={ parseInt((card.cardAttr2), 10) }
              cardAttr3={ parseInt((card.cardAttr3), 10) }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
              hasTrunfo={ trunfoCreated }
              onD={ onD }
              pre={ false }
            />))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
