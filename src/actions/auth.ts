import { AxiosError } from 'axios';

import { User } from '../services/models';
import * as ActionType from './authConstants'

interface LoginParams {
  email: string;
  password: string;
}

export const auth = {
  login: (params: LoginParams) => ({
    type: ActionType.LOGIN as typeof ActionType.LOGIN,
    payload: params,
  }),

  success: (params: User) => ({
    type: ActionType.LOGIN_SUCCESS as typeof ActionType.LOGIN_SUCCESS,
    payload: params,
  })
};

export type AuthAction =
  | ReturnType<typeof auth.login>
  | ReturnType<typeof auth.success>;
