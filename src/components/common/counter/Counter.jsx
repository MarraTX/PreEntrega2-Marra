import React from "react";
import { Button } from "@mui/material";

const Counter = ({ contador, sumar, restar }) => {
  return (
    <div>
      <Button variant="contained" onClick={sumar}>
        Sumar
      </Button>
      <h1>{contador}</h1>
      <Button variant="contained" onClick={restar}>
        Restar
      </Button>
      <Button variant="outlined">Agregar al carrito</Button>
    </div>
  );
};

export default Counter;
