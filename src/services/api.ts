import axios from 'axios';
import { User } from './models';

interface ApiConfig { baseURL: string; timeout: number; }

const DEFAULT_CONFIG: ApiConfig = {
  baseURL: 'http://localhost:3000',
  timeout: 7000,
}

export const loginFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_CONFIG,
    ...optionConfig
  };
  const instance = axios.create(config);
  const login = async (email: string, password: string) => {
    try {
      const res = await instance.post('/api/v1/auth/sign_in', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        email,
        password,
      });
      if (res.status !== 200) {
        throw new Error('login error')
      }
      const user: User = {
        ...res.data.data,
        access_token: res.headers['access-token'],
        client: res.headers['client'],
        uid: res.headers['uid'],
      };
      return user;
    } catch (err) {
      throw err;
    }
  }
  return login;
};

export const sendPointFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_CONFIG,
    ...optionConfig
  };
  const instance = axios.create(config);
  const sendPoint = async (name: string, point: number, access_token: string, client: string, uid: string) => {
    try {
      instance.defaults.headers.common['client'] = client;
      instance.defaults.headers.common['access-token'] = access_token;
      instance.defaults.headers.common['uid'] = uid;
      const res = await instance.post('/api/v1/points/send', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        to: name,
        point,
      });
      if (res.status !== 200) {
        throw new Error('send point error')
      }
      return res.data;
    } catch (err) {
      throw err;
    }
  }
  return sendPoint;
};

export const getUserPointFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_CONFIG,
    ...optionConfig
  };
  const instance = axios.create(config);
  const getUserPoint = async (access_token: string, client: string, uid: string) => {
    try {
      instance.defaults.headers.common['client'] = client;
      instance.defaults.headers.common['access-token'] = access_token;
      instance.defaults.headers.common['uid'] = uid;
      const res = await instance.get('/api/v1/points/users', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
      if (res.status !== 200) {
        throw new Error('send point error')
      }
      return res.data;
    } catch (err) {
      throw err;
    }
  }
  return getUserPoint;
};
