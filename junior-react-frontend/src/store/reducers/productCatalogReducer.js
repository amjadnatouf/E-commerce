import actiontypes from "../actiontypes";

const initState = {
  category: "all",
  active: null,
};

const productCatalogReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes.productCatalog.getCategory:
      const item = {
        cat: action.payload,
        active: action.index,
      };

      localStorage.setItem("category", JSON.stringify(item));
      return {
        ...state,
        category: action.payload,
        active: action.index,
      };

    default:
      return state;
  }
};

export default productCatalogReducer;
