import actiontypes from "../actiontypes";

export const addToCart = (product, curr) => {
  return {
    type: actiontypes.shoppingCart.add,
    payload: product,
    curr,
  };
};

export const removeOne = (id, curr) => {
  return {
    type: actiontypes.shoppingCart.decrementOne,
    payload: id,
    curr,
  };
};

export const removeProduct = (id, curr) => {
  return {
    type: actiontypes.shoppingCart.removeProduct,
    payload: id,
    curr,
  };
};

export const updateTotalAmount = (curr) => {
  return {
    type: actiontypes.shoppingCart.updateTotalAmount,
    payload: curr,
  };
};
