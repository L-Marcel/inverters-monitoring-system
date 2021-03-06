declare type AppContext = {
  user: User;
  isLoading: boolean;
  login: (credentials: Credentials, onError: (message: string) => void) => void;
  checkIsAuth: () => void;
  token: string;
  setToken: (token: string | boolean) => void;
};

declare type User = {
  id: string;
  username: string;
  login: string;
  password: string;
  created_at: Date;
  models: Models;
};

declare type Models = {
  growatt: {
    login: string;
    password: string;
  } | boolean;
};

declare type Credentials = {
  login: string;
  password: string;
};

declare type Plant = {
  id: number;
  name: string;
  model: string;
};

declare interface Inverter extends Plant {
  energy: number;
  power: number;
};