import { ADD_EXPENSES, GET_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  code: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case GET_CURRENCIES: {
    const currenciesFiltered = Object.values(action.currencies)
      .filter((e) => e.codein !== 'BRLT');
    return {
      ...state,
      currencies: action.currencies,
      code: currenciesFiltered,
    };
  }
  default:
    return state;
  }
};

export default wallet;
