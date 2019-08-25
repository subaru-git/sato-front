import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { watchAuth } from './auth'
import { watchPoint, watchUserPoint } from './point'

export default function* rootSaga() {
  yield all([fork(watchAuth), fork(watchPoint), fork(watchUserPoint)]);
}
