export interface User {
  id: number;
  email: string;
  provider: string;
  allow_password_change: boolean;
  name: string;
  nickname: string | null;
  image: string | null;
  access_token: string;
  client: string;
  uid: string
}

export interface UserPoint {
  name: string;
  point: number;
  last_update: string;
}

export interface UserPoints {
  points: UserPoint[]
}
