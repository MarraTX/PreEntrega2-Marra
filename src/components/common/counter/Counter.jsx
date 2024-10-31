import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Counter = ({ contador, sumar, restar, onAdd, stock }) => {
  return (
    <div className="counter-container flex flex-col items-center gap-4 mt-6 p-4 rounded-lg bg-gray-50 shadow-md">
      {/* Muestra el contador en un estilo más grande y centrado */}
      <h2 className="text-2xl font-semibold text-gray-800">{contador}</h2>

      {/* Botones de añadir y quitar */}
      <div className="button-group flex gap-4">
        <Button
          variant="contained"
          onClick={restar}
          color="error"
          disabled={contador === 1}
          className="transition duration-300 transform hover:scale-105"
        >
          Quitar
        </Button>
        <Button
          variant="contained"
          onClick={sumar}
          color="warning"
          disabled={contador >= stock}
          className="transition duration-300 transform hover:scale-105"
        >
          Añadir
        </Button>
      </div>

      {/* Botón para agregar al carrito */}
      <Button
        variant="outlined"
        color="success"
        className="add-cart-button mt-4 transition duration-300 transform hover:scale-105 hover:bg-green-500 hover:text-white"
        onClick={() => onAdd(contador)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
