import actiontypes from "../actiontypes";

export const changeCurrency = (c, i) => {
  return {
    type: actiontypes.currency.changeCurrency,
    payload: c,
    products: i,
  };
};
