import { Reducer, combineReducers } from 'redux';
import { AxiosError } from 'axios';

import { AuthAction } from './actions/auth'
import { PointAction } from './actions/point'
import * as AuthActionType from './actions/authConstants'
import * as PointActionType from './actions/pointConstants'
import { User } from './services/models';

export interface AuthState {
  name: string;
  access_token: string;
  client: string;
  uid: string;
  loggedin: boolean;
  error?: AxiosError | null;
}

export const initialAuthState: AuthState = {
  name: '',
  access_token: '',
  client: '',
  uid: '',
  loggedin: false,
};

export interface UserPointState {
  name: string;
  point: number;
  last_update: string;
  last_action?: string;
}

export interface UserPointsState {
  points: UserPointState[];
}

export const initialUserPointsState: UserPointsState = {
  points: []
}

const authReducer: Reducer<AuthState, AuthAction> = (
  state: AuthState = initialAuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionType.LOGIN:
      return {
        ...state,
      };
    case AuthActionType.LOGIN_SUCCESS:
      return {
        ...state,
        client: action.payload.client,
        access_token: action.payload.access_token,
        name: action.payload.name,
        uid: action.payload.uid,
        loggedin: true,
      };
    default: {
      return state;
    }
  }
}

const userPointReducer: Reducer<UserPointsState, PointAction> = (
  state: UserPointsState = initialUserPointsState,
  action: PointAction
): UserPointsState => {
  switch (action.type) {
    case PointActionType.GET_USER_POINTS:
      return {
        ...state,
      }
    case PointActionType.GET_USER_POINTS_SUCCESS:
      return {
        ...state,
        points: action.payload.points,
      }
    default: {
      return state
    }
  }
}
const rootReducer = combineReducers({ auth: authReducer, user_point: userPointReducer });

export default rootReducer
export type AppState = ReturnType<typeof rootReducer>
