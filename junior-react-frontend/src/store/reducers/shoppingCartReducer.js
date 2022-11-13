import actiontypes from "../actiontypes";

const initState = {
  cart: JSON.parse(localStorage.getItem("product")) || [],
  totalQuantity: 0,
  totalAmount: 0,
};

const currencies = { $: 0, "£": 1, A$: 2, "¥": 3, "₽": 4 };

const shoppingCartReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes.shoppingCart.add: {
      const itemRef = state.cart.find((item) => item.id === action.payload.id);

      const cartItem = {
        ...action.payload,
        quantity: 1,
      };

      itemRef
        ? (itemRef.quantity += 1)
        : (state.cart = [...state.cart, cartItem]);

      localStorage.setItem("product", JSON.stringify(state.cart));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(getTotalQuantity(state.cart))
      );
      localStorage.setItem(
        "totalAmount",
        JSON.stringify(getTotalAmount(state.cart, action.curr))
      );

      return {
        ...state,
        totalQuantity: getTotalQuantity(state.cart),
        totalAmount: getTotalAmount(state.cart, action.curr),
      };
    }
    case actiontypes.shoppingCart.decrementOne: {
      const itemRef = state.cart.find((item) => item.id === action.payload);

      itemRef.quantity <= 1
        ? (state.cart = state.cart.filter((item) => item.id !== action.payload))
        : (itemRef.quantity -= 1);

      localStorage.setItem("product", JSON.stringify([...state.cart]));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(getTotalQuantity(state.cart))
      );
      localStorage.setItem(
        "totalAmount",
        JSON.stringify(getTotalAmount(state.cart, action.curr))
      );

      return {
        ...state,
        totalQuantity: getTotalQuantity(state.cart),
        totalAmount: getTotalAmount(state.cart, action.curr),
      };
    }

    case actiontypes.shoppingCart.removeProduct:
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      localStorage.removeItem("product");
      localStorage.removeItem("totalQuantity");
      localStorage.removeItem("totalAmount");
      localStorage.removeItem("attributes");

      return {
        ...state,
        totalQuantity: getTotalQuantity(state.cart),
        totalAmount: getTotalAmount(state.cart, action.curr),
      };

    case actiontypes.shoppingCart.updateTotalAmount:
      localStorage.setItem(
        "totalAmount",
        JSON.stringify(getTotalAmount(state.cart, action.payload))
      );
      return {
        ...state,
        totalAmount: getTotalAmount(state.cart, action.payload),
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;

const getTotalQuantity = (cart) => {
  let total = 0;

  cart.forEach((item) => {
    total += item.quantity;
  });

  return total;
};

const getTotalAmount = (cart, curr) => {
  let total = 0;

  cart.forEach((item) => {
    total += item.prices[currencies[curr]].amount * item.quantity;
  });

  return total.toFixed(2);
};
