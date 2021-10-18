import getEnv from '../utils/getEnv';

export const config = {
  baseURL: getEnv('REACT_APP_API_URL'),
  source: getEnv('REACT_APP_API_SOURCE'),
};

export default config;
