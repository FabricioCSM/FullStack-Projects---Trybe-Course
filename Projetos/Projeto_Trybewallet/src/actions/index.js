export const PUT_INFO = 'PUT_INFO';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export function signUser(email) {
  return {
    type: PUT_INFO,
    email,
  };
}

export function walletInfo(expenses) {
  return {
    type: ADD_EXPENSES,
    expenses,
  };
}

export function getCurrencies(currencies) {
  return {
    type: GET_CURRENCIES,
    currencies,
  };
}

export const getCurrencyThunk = () => (dispatch) => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => (
      response.json()
        .then((json) => dispatch(getCurrencies(json)))
    ))
);
