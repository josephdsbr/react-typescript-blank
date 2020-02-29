import { Reducer } from 'redux';
import { Auth, AuthTypes } from './types';

const INITIAL_STATE: Auth = {
  token: null,
  signed: false,
  loading: false,
  user: null,
  error: undefined,
};

const reducer: Reducer<Auth> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.AUTH_SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.AUTH_SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.data.token,
        user: action.payload.data.user,
        error: undefined,
        signed: true,
        loading: false,
      };
    case AuthTypes.AUTH_SIGN_IN_FAILURE: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case AuthTypes.AUTH_SIGN_OUT: {
      return {
        ...state,
        token: null,
        user: null,
        error: undefined,
        signed: false,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
