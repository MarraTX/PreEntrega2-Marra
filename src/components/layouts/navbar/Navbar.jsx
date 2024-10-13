import { useState } from "react";
import { CartWidgets } from "../../common/cartWidget/CartWidgets";
import "./navbar.css";
import Button from "@mui/material/Button";

const Navbar = () => {
  const categorias = [
    { title: "Productos", id: 1 },
    { title: "Contacto", id: 2 },
    { title: "Ubicacion", id: 3 },
  ];
  return (
    <div className="container-nav">
      {/* nombre de la empresa */}
      <h1>Natural Chadi</h1>
      {/* listado de categorias clickeables */}
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>{categoria.title}</li>
        ))}
      </ul>
      <CartWidgets />
    </div>
  );
};

export default Navbar;
