import React from "react";
import { Button } from "@mui/material";
import "./Counter.css";
import { Link } from "react-router-dom";

const Counter = ({ contador, sumar, restar, onAdd, stock }) => {
  return (
    <div className="counter-container">
      <h2>{contador}</h2>
      <div className="button-group">
        <Button
          variant="contained"
          onClick={restar}
          color="error"
          disabled={contador === 1}
        >
          Restar
        </Button>
        <Button
          variant="contained"
          onClick={sumar}
          color="warning"
          disabled={contador >= stock}
        >
          Sumar
        </Button>
      </div>
      <Link to={"/cart"}>
        <Button
          variant="outlined"
          color="success"
          className="add-cart-button"
          onClick={() => onAdd(contador)}
        >
          Agregar al carrito
        </Button>
      </Link>
    </div>
  );
};

export default Counter;
