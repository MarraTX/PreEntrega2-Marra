import React, { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";
import { products } from "../../../productsMock";
const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const id = "1";

  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    }
  }, [id]);
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
