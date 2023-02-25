import ACTION from '../actions/user_action.js';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  if (state === undefined) {
    return {
      role: 'GUEST',
    };
  }
  switch (action.type) {
    case ACTION.SET_USER:
      return {
        ...state,
        ...action.user,
      };
    case ACTION.DELETE_USER:
      return {
        role: 'GUEST',
      };
    default:
      return { ...state };
  }
};
