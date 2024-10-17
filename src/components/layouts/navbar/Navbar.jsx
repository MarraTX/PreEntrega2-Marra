import { useState } from "react";
import { CartWidgets } from "../../common/cartWidget/CartWidgets";
import "./navbar.css";
import { Link } from "react-router-dom";
import { categories } from "./categories";

const Navbar = () => {
  return (
    <div className="container-nav">
      <Link to="/">NATURAL CHADI</Link>
      {/* listado de categorias clickeables */}
      <ul>
        {categories.map(({ title, path }) => (
          <Link key={title} to={path}>
            {title}
          </Link>
        ))}
      </ul>
      <Link to="/cart">
        <CartWidgets />
      </Link>
    </div>
  );
};

export default Navbar;
