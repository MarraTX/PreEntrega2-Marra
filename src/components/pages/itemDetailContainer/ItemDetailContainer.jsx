import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  // hook --> recuperar la parte dinamica de la ruta
  const [item, setItem] = useState({});

  const { id } = useParams(); // devuelve un objeto {}

  // cargar las funciones del context;
  const { addToCart, getTotalQuantityByID } = useContext(CartContext);
  let totalItemsAgregados = getTotalQuantityByID(id);
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
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Agregado al carrito!",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <ItemDetail
      item={item}
      onAdd={onAdd}
      totalItemsAgregados={totalItemsAgregados}
    />
  );
};

export default ItemDetailContainer;
