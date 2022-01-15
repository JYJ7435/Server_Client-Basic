import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  AUTH_USER,
} from "../_actions/types";

function user(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginSuccess: action.payload,
      };

    case REGISTER_USER:
      return {
        ...state,
        register: action.payload,
      };

    case LOGOUT_USER:
      return {
        ...state,
      };

    case AUTH_USER:
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
}

export default user;
