import React from "react";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const emptyCart = <div className="empty">Your cart is empty</div>;

  const { cart, totalAmount } = useSelector((state) => state.shoppingCart);
  const { curr } = useSelector((state) => state.currency);

  const productStorge = JSON.parse(localStorage.getItem("product"));
  const AmountStorge = JSON.parse(localStorage.getItem("totalAmount"));

  return (
    <div>
      {productStorge
        ? productStorge.map((product) => (
            <CartProduct key={product.id} item={product} />
          ))
        : cart.map((product) => (
            <CartProduct key={product.id} item={product} />
          ))}

      {!cart.length && emptyCart}

      <div className="dropdown-divider"></div>

      <div className="checkout">
        {AmountStorge ? (
          <div>
            <div>Total Price: {AmountStorge + " " + curr}</div>
            <small className="text-muted">with. tax</small>
          </div>
        ) : (
          <div>
            <div>Total Price: {totalAmount + " " + curr}</div>
            <small className="text-muted">with. tax</small>
          </div>
        )}
        <div>
          <Link to="/checkout" className="btn btn-info btn-check">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
