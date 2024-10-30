import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  // hook --> recuperar la parte dinamica de la ruta
  const [item, setItem] = useState({});

  const { id } = useParams(); // devuelve un objeto {}

  // const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    }

    // navigate("/cart");
  }, [id]);

  const onAdd = (quantity) => {
    let productoParaElCarrito = {
      ...item,
      quantity,
    };
    addToCart(productoParaElCarrito);
  };

  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
