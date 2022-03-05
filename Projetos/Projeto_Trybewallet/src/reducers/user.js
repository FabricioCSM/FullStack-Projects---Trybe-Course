import { PUT_INFO } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const signUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PUT_INFO:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default signUser;
