import ACTION from '../actions/order_action';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  if (state === undefined) {
    return {
      product: [],
      deliveryFee: 3000,
    };
  }
  switch (action.type) {
    case ACTION.SET_PRODUCT:
      return {
        ...state,
        product: [{ ...action.product }],
      };
    case ACTION.ADD_PRODUCT:
      return {
        ...state,
        product: [...state.product, action.product],
      };
    case ACTION.DELETE_PRODUCT:
      return {
        ...state,
        product: [],
      };
    case ACTION.SET_DELIVERY:
      return {
        ...state,
        deliveryFee: action.deliveryFee,
      };

    default:
      return { ...state };
  }
};
