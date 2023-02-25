import ACTION from '../actions/auth_action.js';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  if (state === undefined) {
    return { logined: false };
  }
  switch (action.type) {
    case ACTION.LOGIN:
      return {
        ...state,
        logined: true,
      };
    case ACTION.LOGOUT:
      return {
        ...state,
        logined: false,
      };
    default:
      return { ...state };
  }
};
