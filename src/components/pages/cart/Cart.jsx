import { Button } from "@mui/material";
import React from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = ({ cart, clearCart, deleteProductById, total, totalProducts }) => {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "50px",
        }}
      >
        Estoy en el carrito de compras
      </h2>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>Titulo: {product.title}</h2>
            <img
              src={product.imageUrl}
              style={{ width: "100px", height: "100px" }}
            />
            <h3>Precio: ${product.price}</h3>
            <h3>Cantidad: {product.quantity}</h3>
            <h3>Subtotal: ${product.price * product.quantity}</h3>
            <Button
              onClick={() => deleteProductById(product.id)}
              variant="contained"
              color="error"
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <Button
        onClick={clearCart}
        sx={{ marginTop: "20px" }}
        variant="contained"
        color="warning"
      >
        Limpiar carrito
      </Button>
      <h2 style={{ marginTop: "20px" }}>Total a pagar: ${total}</h2>
      <h2 style={{ marginTop: "20px" }}>Total de productos: {totalProducts}</h2>
    </div>
  );
};

export default Cart;
