import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../server/queries";
import { getCategory } from "../store/actions/productCatalogActions";

const Products = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.productCatalog.category);
  const categoryStorage = JSON.parse(localStorage.getItem("category"));

  const { data, loading, error } = useQuery(fetchProducts, {
    variables: {
      categoryInput: { title: categoryStorage?.cat || category },
    },
  });

  const categories = ["All", "Clothes", "Tech"];
  const [activeTag, setActiveTag] = useState(categoryStorage?.active);
  const handelClick = (e, i) => {
    dispatch(getCategory(e.target.innerText, i));
    setActiveTag(i);
  };

  return (
    <>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <ul className="category">
        {categories.map((e, i) => (
          <li
            onClick={(e) => handelClick(e, i)}
            key={i}
            className={i === activeTag ? " active" : ""}
          >
            {e}
          </li>
        ))}
      </ul>
      <div className="products">
        {data &&
          data.category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Products;
