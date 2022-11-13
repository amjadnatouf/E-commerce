import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../components/ShoppingCart/CartProduct";

const Checkout = () => {
  const { cart, totalAmount } = useSelector((state) => state.shoppingCart);
  const { curr } = useSelector((state) => state.currency);

  return (
    <div>
      <h2 className="text-center mb-3">Checkout</h2>

      <div className="d-flex justify-content-between">
        <div className="checkout_cart">
          {cart.map((product) => (
            <div className="border-bottom" key={product.id}>
              <CartProduct item={product} />
            </div>
          ))}
        </div>
        <div className="dropdown-divider"></div>

        <div className="border">
          <div>Total Price:</div>
          <div>{totalAmount + " " + curr}</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
