import { AxiosError } from 'axios';

import { UserPoints } from '../services/models';
import * as ActionType from './pointConstants'

interface SendPointParams {
  name: string;
  point: number;
}

export const point = {
  send: (params: SendPointParams) => ({
    type: ActionType.SEND as typeof ActionType.SEND,
    payload: params,
  }),
  getUserPoint: () => ({
    type: ActionType.GET_USER_POINTS as typeof ActionType.GET_USER_POINTS,
  }),
  getUserPointSuccess: (params: UserPoints) => ({
    type: ActionType.GET_USER_POINTS_SUCCESS as typeof ActionType.GET_USER_POINTS_SUCCESS,
    payload: params,
  })
};

export type PointAction =
  | ReturnType<typeof point.send>
  | ReturnType<typeof point.getUserPoint>
  | ReturnType<typeof point.getUserPointSuccess>;
