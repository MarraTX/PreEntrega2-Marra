import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  // verificar si existe en el carrito
  // limpiar carrito
  const clearCart = () => {
    setCart([]);
  };
  // eliminar producto especifico
  const deleteProductById = (id) => {
    let arrayFiltrado = cart.filter((product) => product.id !== id);
    setCart(arrayFiltrado);
  };
  // total a pagar
  const getTotalAmount = () => {
    let totalCarrito = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    return totalCarrito;
  };
  // fx que me diga el total de productos en el carrito
  const getTotalProducts = () => {
    let totalProductos = cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
    return totalProductos;
  };
  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProductById,
    getTotalAmount,
    getTotalProducts,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
