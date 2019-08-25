import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as Action from '../actions/authConstants';
import { auth } from '../actions/auth'
import { loginFactory } from '../services/api'

function* runLogin(action: ReturnType<typeof auth.login>) {
  const { email, password } = action.payload;

  try {
    const api = loginFactory();
    const user = yield call(api, email, password);
    yield put(auth.success(user));
  } catch (error) {
    throw new error;
  }
}

export function* watchAuth() {
  yield takeLatest(Action.LOGIN, runLogin);
}
