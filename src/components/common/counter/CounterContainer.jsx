import React, { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ onAdd, stock, totalItemsAgregados }) => {
  const [contador, setContador] = useState(totalItemsAgregados);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  let childProps = {
    contador,
    sumar,
    restar,
    onAdd,
  };
  return <Counter {...childProps} />;
};

export default CounterContainer;
