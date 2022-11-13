import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { fetchCurrencies, fetchProducts } from "../server/queries";
import { changeCurrency } from "../store/actions/currencyActions";
import { updateTotalAmount } from "../store/actions/shoppingCartActions";

const Navbar = () => {
  const { data } = useQuery(fetchCurrencies);
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

  const category = useSelector((state) => state.productCatalog.category);

  const res = useQuery(fetchProducts, {
    variables: { categoryInput: { title: category } },
  });

  const totalQuantity = useSelector(
    (state) => state.shoppingCart.totalQuantity
  );

  const quantityStorge = JSON.parse(localStorage.getItem("totalQuantity"));

  const handleChange = (e) => {
    dispatch(changeCurrency(e.target.value, res.data.category.products));
    dispatch(updateTotalAmount(e.target.value));
  };

  return (
    <nav className="navbar ">
      <div className="container">
        <div className="navbar-nav">
          <div className="right">
            <Link className="navbar-brand" to="/">
              LOGO
            </Link>

            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="left">
            <ul className="navbar-nav">
              <li className="nav-item">
                <select onChange={handleChange}>
                  {data &&
                    data.currencies?.map((c, i) => (
                      <option key={c.label} value={c.symbol}>
                        {c.symbol}
                      </option>
                    ))}
                </select>
              </li>
              <li
                className="nav-item shopping-cart-notification"
                onClick={() => setShowCart(!showCart)}
              >
                <div className={` ${showCart ? " dropdown-bg" : ""}`}></div>
                <i className="fas fa-shopping-cart"></i>
                {quantityStorge ? (
                  <span className="notification">{quantityStorge}</span>
                ) : (
                  totalQuantity > 0 && (
                    <span className="notification">{totalQuantity}</span>
                  )
                )}
                {showCart && (
                  <div className="shopping-cart-dropdown">
                    <ShoppingCart className="shop-cart" />
                  </div>
                )}
              </li>
              <li className="nav-item">
                <i className="fa-solid fa-user"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
