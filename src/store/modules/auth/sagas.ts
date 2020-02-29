import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { signInSuccess, signInFailure } from './actions';

export function* authSignIn() {
  try {
    const response = yield call(api.get, 'auth');

    yield put(signInSuccess(response.data));
  } catch (err) {
    yield put(signInFailure(err));
  }
}
