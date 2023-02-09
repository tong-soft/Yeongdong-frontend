// eslint-disable-next-line import/no-anonymous-default-export
export default {
  SET_PRODUCT: 'SET_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  ADD_PRODUCT: 'ADD_PRODUCT',
  SET_DELIVERY: 'SET_DELIVERY',

  SET_PRODUCT__ACTION_FUNC: (payload) => ({ type: 'SET_PRODUCT', ...payload }),
  ADD_PRODUCT__ACTION_FUNC: (payload) => ({ type: 'ADD_PRODUCT', ...payload }),
  DELETE_PRODUCT__ACTION_FUNC: (payload) => ({ type: 'DELETE_PRODUCT', ...payload }),
  SET_DELIVERY__ACTION_FUNC: (payload) => ({ type: 'SET_DELIVERY', ...payload }),
};
