import { all, call, fork, put, takeLatest, select } from 'redux-saga/effects';

import * as Action from '../actions/pointConstants';
import { point as pointAction } from '../actions/point'
import { sendPointFactory, getUserPointFactory } from '../services/api'
import { User } from '../services/models'
import { point } from '../actions/point'
import { AppState } from '../reducer'

function* runSendPoint(action: ReturnType<typeof pointAction.send>) {
  const { name, point } = action.payload;

  try {
    const api = sendPointFactory();
    const user: AppState = yield select(state => state);
    const ret = yield call(api, name, point, user.auth.access_token, user.auth.client, user.auth.uid);
  } catch (error) {
    throw new error;
  }
}

export function* watchPoint() {
  yield takeLatest(Action.SEND, runSendPoint);
}

function* runGetUserPoint(action: ReturnType<typeof pointAction.send>) {
  try {
    const api = getUserPointFactory();
    const user: AppState = yield select(state => state);
    const points = yield call(api, user.auth.access_token, user.auth.client, user.auth.uid);
    yield put(point.getUserPointSuccess(points.data));
  } catch (error) {
    throw new error;
  }
}

export function* watchUserPoint() {
  yield takeLatest(Action.GET_USER_POINTS, runGetUserPoint);
}
