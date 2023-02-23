import _ from './config';

// const env = 'development';
const env = 'production';

export default env === 'development'
  ? {
      ..._,
      REDIRECT_URL: _.DEV_REDIRECT_URL,
      LOGOUT_REDIRECT_URL: _.DEV_LOGOUT_REDIRECT_URL,
      HOST_URL: _.DEV_HOST_URL,
      CLIENT_ID: _.DEV_CLIENT_ID,
      CALLBACK_URL: _.DEV_CALLBACK_URL,
      CLIENT_SECRET: _.CLIENT_SECRET,
      SERVER_URL: _.DEV_SERVER_URL,
      BASE_URL: _.DEV_BASE_URL,
    }
  : {
      ..._,
    };
