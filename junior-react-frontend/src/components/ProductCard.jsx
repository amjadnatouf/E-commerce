import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { curr } = useSelector((state) => state.currency);
  const currencies = { $: 0, "£": 1, A$: 2, "¥": 3, "₽": 4 };

  return (
    <Link className={`col ${!product.inStock && "disable"}`} to={product.id}>
      <div className="card">
        <div className="card-img-container">
          <img src={product.gallery[0]} alt={product.name} />
          {!product.inStock && <div className="stock">NOT AVAILABLE</div>}
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.short}</p>
          <div className="card-links">
            <button className="btn btn-info">Add To Cart</button>
            <p className="text-danger">
              {product.prices[currencies[curr]].amount + " " + curr}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
