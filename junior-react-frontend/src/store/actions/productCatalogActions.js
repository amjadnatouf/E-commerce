import actiontypes from "../actiontypes";

export const getCategory = (cat, i) => {
  return {
    type: actiontypes.productCatalog.getCategory,
    payload: cat.toLowerCase(),
    index: i,
  };
};
