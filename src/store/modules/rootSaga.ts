import { all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from './auth/types';
import { authSignIn } from './auth/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.AUTH_SIGN_IN_REQUEST, authSignIn),
  ]);
}
