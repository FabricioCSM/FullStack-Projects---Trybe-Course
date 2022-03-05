/* eslint-disable max-lines */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { walletInfo, getCurrencyThunk } from '../actions';
import './Wallet.css';

const FOOD = 'Alimentação';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      description: '',
      method: 'Dinheiro',
      tag: FOOD,
      currency: 'USD',
      value: 0,
      totalSum: 0,
      convertRate: 0,
    };

    this.addExpense = this.addExpense.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCurrency = this.handleCurrency.bind(this);
    this.convertExpenses = this.convertExpenses.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  addExpense() {
    const { setExpenses, getCurrencies, currencies } = this.props;
    const { id,
      value,
      description,
      tag,
      method,
      currency,
      convertRate } = this.state;
    this.setState((prevState) => ({
      id: id + 1,
      totalSum: prevState.totalSum + (value * currencies[currency].ask),
    }), () => {
      setExpenses({ id,
        value,
        converted: value * currencies[currency].ask,
        description,
        tag,
        method,
        currency,
        exchangeRates: currencies,
      });
    });
    this.setState({
      value: 0,
      description: '',
      method: 'Cartão de débito',
      tag: FOOD,
      currency: 'USD',
      convertRate: 0,
    });
    getCurrencies();
  }

  handleInputChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  convertExpenses() {
    const { currency } = this.state;
    const { codes } = this.props;
    const expenseConvertRate = codes.filter((element) => element.code === currency);
    this.setState({
      convertRate: parseFloat(expenseConvertRate[0].ask),
    });
  }

  handleCurrency({ target }) {
    this.setState({
      currency: target.value,
    }, () => this.convertExpenses());
  }

  render() {
    const { email, currencies, expenses } = this.props;
    const CREDIT_CARD = 'Cartão de crédito';
    const {
      totalSum,
      value,
      description,
    } = this.state;
    return (
      <div>
        <header className="header">
          <p className="email">{ email }</p>
          <h2>TrybeWallet</h2>
          <div>
            <p className="countryMoney">BRL</p>
            <p className="totalField">
              Total:
              { ' ' }
              { (totalSum).toFixed(2) }
            </p>
          </div>
        </header>
        <fieldset className="fieldSet">
          <input
            label="value"
            data-testid="value-input"
            className="expenseValue"
            onChange={ this.handleInputChange }
            value={ value }
            placeholder="Valor da Despesa"
            type="text"
            name="value"
          />
          <textarea
            label="description"
            cols="30"
            className="expenseDescription"
            rows="2"
            maxLength="100"
            value={ description }
            data-testid="description-input"
            onChange={ this.handleInputChange }
            placeholder="Descrição despesa"
            type="text"
            name="description"
          />
          <label htmlFor="currency">
            Moeda:
            <select
              id="currency"
              className="currency"
              onChange={ this.handleCurrency }
              data-testid="currency-input"
              name="currency"
            >
              {Object.keys(currencies).filter((e) => e !== 'USDT')
                .map((currency) => (
                  <option
                    key={ currency }
                    value={ currency }
                  >
                    { `${currency}` }
                  </option>
                ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select
              name="method"
              className="method"
              onChange={ this.handleInputChange }
              data-testid="method-input"
              id="method"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de Débito">Cartão de débito</option>
              <option value={ CREDIT_CARD }>Cartão de crédito</option>
            </select>
          </label>
          <label htmlFor="tag">
            <select
              name="tag"
              className="category"
              onChange={ this.handleInputChange }
              id="tag"
              data-testid="tag-input"
            >
              <option value={ FOOD }>Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </fieldset>
        <button
          className="submitBtn"
          onClick={ () => this.addExpense() }
          type="submit"
        >
          Adicionar despesa
        </button>
        <div />
        <table className="table">
          <thead>
            <tr className="tableHeaders">
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((element) => (
              <tr key={ element.id }>
                <td>{ element.description }</td>
                <td>{ element.tag }</td>
                <td>{ element.method }</td>
                <td>{ element.value }</td>
                <td>{ element.exchangeRates[element.currency].name }</td>
                <td>
                  {
                    Number(element.exchangeRates[element.currency].ask).toFixed(2)
                  }
                </td>
                <td>
                  {
                    Number(element.value
                    * element.exchangeRates[element.currency].ask).toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td><button type="button" onClick={ console.log('excluido') }>X</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  codes: state.wallet.code,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (expenseInfo) => dispatch(walletInfo(expenseInfo)),
  getCurrencies: () => dispatch(getCurrencyThunk()),
});

Wallet.propTypes = {
  setExpenses: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  codes: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
