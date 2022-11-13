import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../server/queries";
import { setAttributes } from "../store/actions/attributesActions";
import { addToCart } from "../store/actions/shoppingCartActions";

const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const currencies = { $: 0, "£": 1, A$: 2, "¥": 3, "₽": 4 };
  const { curr } = useSelector((state) => state.currency);
  const { attributes } = useSelector((state) => state.attributes);
  const { data } = useQuery(fetchProduct, { variables: { id: params.id } });
  const product = data && data.product;

  const [image, setImage] = useState("");
  const [activeIndexImg, setActiveIndexImg] = useState(0);

  const handleClick = (e, i) => {
    setImage(e.target.src);
    setActiveIndexImg(i);
  };

  const [activeAttribute, setActiveAttribute] = useState({});

  const handleActive = (name, type, item, index) => {
    const ob = {
      [name]: item.id,
    };
    setActiveAttribute((prevState) => {
      return { ...prevState, ...ob };
    });
    document.getElementById("requierd").innerHTML = "";
    dispatch(setAttributes(name, type, item, index));
  };

  const handleAddToCart = () => {
    const check = product.attributes.map((element) =>
      attributes.some(
        (e) =>
          e.name === element.name &&
          element.items.some((i) => e.value === i.value)
      )
    );

    if (check.every((v) => v)) dispatch(addToCart(product, curr));
    else {
      const small = document.getElementById("requierd");
      const smallText = document.createTextNode("Select attributes please!");
      !small.innerText && small.appendChild(smallText);
    }
  };

  return (
    <div className="product-details">
      <div className="title">
        <h2 className="card-title">{data?.product.name}</h2>
        <p className="card-text">{data?.product.brand}</p>
      </div>
      <div className="col-1">
        {product && (
          <div className="product-image-container">
            <img
              src={image || product.gallery[0]}
              className="card-img"
              alt={product.name}
            />
          </div>
        )}

        <ul className="product-gallery">
          {product &&
            product.gallery.map((img, index) => (
              <li className="thumbnails-item" key={index}>
                <img
                  src={img}
                  alt=""
                  onClick={(e) => handleClick(e, index)}
                  className={`${index === activeIndexImg ? "active" : ""}`}
                />
              </li>
            ))}
        </ul>
      </div>

      {product && (
        <div className="card col-3">
          <div className="card-body col-3">
            <div className="card-body-title">
              <h2 className="card-title">{data?.product.name}</h2>
              <p className="card-text">{data?.product.brand}</p>
            </div>
            <div className="single-product-attributes">
              {product.attributes.map((attribute, index) => (
                <div key={index} className="product-attributes">
                  <h5>{attribute.name} :</h5>
                  {attribute.items.map((element, index) => (
                    <span
                      className={`product-attributes-item ${
                        activeAttribute[attribute.name] === element.id
                          ? "active"
                          : ""
                      }`}
                      key={element.id}
                      style={{
                        backgroundColor: element.value,
                      }}
                      onClick={() =>
                        handleActive(
                          attribute.name,
                          attribute.type,
                          element,
                          product.name
                        )
                      }
                    >
                      {attribute.type === "swatch" ? "" : element.value}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div className="card-links product-link">
              <button className="btn btn-info" onClick={handleAddToCart}>
                Add To Cart
              </button>
              <p className="text-danger h5">
                {product.prices[currencies[curr]].amount + " " + curr}
              </p>
            </div>
            <div id="requierd" className="required"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
