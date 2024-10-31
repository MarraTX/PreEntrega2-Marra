import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../config-firebase";

const ItemDetailContainer = () => {
  // hook --> recuperar la parte dinamica de la ruta
  const [item, setItem] = useState({});

  const { id } = useParams(); // devuelve un objeto {}

  // cargar las funciones del context;
  const { addToCart, getTotalQuantityByID } = useContext(CartContext);
  let totalItemsAgregados = getTotalQuantityByID(id);

  useEffect(() => {
    let productCollection = collection(db, "productos");
    let refDoc = doc(productCollection, id);
    let getProduct = getDoc(refDoc);

    getProduct
      .then((res) => {
        setItem({ id: res.id, ...res.data() });
      })
      .catch((err) => console.log(err));
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
      title: "Agregado con éxito!",
      showConfirmButton: false,
      timer: 1000,
      width: "250px", // Ajusta el ancho
      padding: "0.5em", // Ajusta el padding
      customClass: {
        title: "swal-title", // Clase para el título
        popup: "swal-popup", // Clase para el popup
      },
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
