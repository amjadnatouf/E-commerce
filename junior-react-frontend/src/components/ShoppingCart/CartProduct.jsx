import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeOne,
  removeProduct,
} from "../../store/actions/shoppingCartActions";
import "./shoppingCart.css";

const CartProduct = ({ item }) => {
  const dispatch = useDispatch();

  const add = (e) => {
    e.stopPropagation();
    dispatch(addToCart(item, curr));
  };

  const remove = (e) => {
    e.stopPropagation();
    dispatch(removeOne(item.id, curr));
  };

  const del = (e) => {
    e.stopPropagation();
    dispatch(removeProduct(item.id, curr));
  };

  const currencies = { $: 0, "£": 1, A$: 2, "¥": 3, "₽": 4 };
  const { curr } = useSelector((state) => state.currency);
  const attributes = JSON.parse(localStorage.getItem("attributes"));

  return (
    <div className="cart-product">
      <div className="cart-img-container">
        <img
          src={item.gallery[0]}
          className="img-fluid cart-image"
          alt={item.name}
        />
        <div>
          <div>
            <strong>{item.name.slice(0, 10)}</strong>
            <div className="single-product-attributes">
              {attributes?.map(
                (attribute, i) =>
                  item.name === attribute.index && (
                    <div key={i} className="product-attributes">
                      {item.attributes.map(
                        (itemAttribute, attrIndex) =>
                          itemAttribute.name === attribute.name && (
                            <h5 key={attrIndex}>
                              {attribute.name} :{" "}
                              {attribute.type === "swatch"
                                ? attribute.item_id
                                : attribute.value}
                            </h5>
                          )
                      )}
                    </div>
                  )
              )}
            </div>
          </div>
          <small>
            {item.quantity} x{item.prices[currencies[curr]].amount + " " + curr}
          </small>
        </div>
      </div>
      <div className="buttons">
        <div className="btn-group">
          <button className="btn btn-dark btn-sm" onClick={remove}>
            -
          </button>
          <button className="btn btn-dark btn-sm" onClick={add}>
            +
          </button>
        </div>
        <button className="btn btn-danger btn-sm px-2" onClick={del}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
