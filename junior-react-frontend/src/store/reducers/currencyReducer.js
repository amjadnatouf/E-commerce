import actiontypes from "../actiontypes";

const initState = { products: [], curr: "$" };

const currencyReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes.currency.changeCurrency: {
      localStorage.setItem("currency", JSON.stringify(action.payload));
      return {
        ...state,
        curr: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default currencyReducer;
