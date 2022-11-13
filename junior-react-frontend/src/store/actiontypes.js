const actiontypes = {
  productCatalog: {
    getCategory: "GET_CATEGORY",
  },
  shoppingCart: {
    add: "ADD_TO_CART",
    decrementOne: "DECREMENT_ITEM_FROM_CART",
    removeProduct: "DELETE_PRODUCT_FROM_CART",
    clear: "CLEAR_CART",
    updateTotalAmount: "UPDATE_TOTAL_AMOUNT",
  },
  currency: { changeCurrency: "CHANGE_CURRENCY" },
  attributes: { setAttributes: "SET_ATTRIBUTES" },
};

export default actiontypes;
