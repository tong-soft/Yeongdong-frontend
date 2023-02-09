import auth_action from './auth_action';
import user_action from './user_action';
import order_action from './order_action';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...auth_action,
  ...user_action,
  ...order_action,
};
