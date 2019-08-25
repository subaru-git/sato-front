import { createStore, compose, applyMiddleware } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage'
import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['error']
}
const persistedReducer = persistReducer(persistConfig, reducer);
export const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleWare),
)

export const persistor = persistStore(store);
export default store;
