import { combineReducers } from "redux";
import attributeReducer from "./attributeReducer";
import currencyReducer from "./currencyReducer";
import productCatalogReducer from "./productCatalogReducer";
import shoppingCartReducer from "./shoppingCartReducer";

export default combineReducers({
  productCatalog: productCatalogReducer,
  shoppingCart: shoppingCartReducer,
  currency: currencyReducer,
  attributes: attributeReducer,
});
