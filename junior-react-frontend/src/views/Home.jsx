import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Our store is happy to welcome you.</h1>
      <h3> You can always find us</h3>
      <Link to="products" className="home-links">
        See what we offer
      </Link>
    </div>
  );
};

export default Home;
