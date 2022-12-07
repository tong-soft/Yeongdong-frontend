// eslint-disable-next-line import/no-anonymous-default-export
export default {
  SET_USER: 'SET_USER',
  DELETE_USER: 'DELETE_USER',

  SET_USER__ACTION_FUNC: (payload) => ({ type: 'SET_USER', ...payload }),
  DELETE_USER__ACTION_FUNC: (payload) => ({ type: 'DELETE_USER', ...payload }),
};
