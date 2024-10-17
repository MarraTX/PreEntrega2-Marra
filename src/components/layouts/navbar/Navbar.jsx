import { useState } from "react";
import { CartWidgets } from "../../common/cartWidget/CartWidgets";
import "./navbar.css";
import { Link } from "react-router-dom";
import { categories } from "./categories";

const Navbar = () => {
  return (
    <div className="container-nav">
      <Link to="/">Natural Chadi</Link>
      {/* listado de categorias clickeables */}
      <ul>
        {categories.map((category) => (
          <li key={category.title}>{category.title}</li>
        ))}
      </ul>
      <Link to="/cart">
        <CartWidgets />
      </Link>
    </div>
  );
};

export default Navbar;
