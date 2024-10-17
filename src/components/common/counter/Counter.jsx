import React from "react";
import { Button } from "@mui/material";
import "./Counter.css";
import { Link } from "react-router-dom";

const Counter = ({ contador, sumar, restar }) => {
  return (
    <div className="counter-container">
      <h1>{contador}</h1>
      <div className="button-group">
        <Button variant="contained" onClick={restar}>
          Restar
        </Button>
        <Button variant="contained" onClick={sumar}>
          Sumar
        </Button>
      </div>
      <Link to={"/cart"}>
        <Button variant="outlined" className="add-cart-button">
          Agregar al carrito
        </Button>
      </Link>
    </div>
  );
};

export default Counter;
