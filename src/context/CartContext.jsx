import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);
  const addToCart = (product) => {
    // verificar si existe en el carrito
    let existe = cart.some((item) => item.id === product.id);
    if (existe) {
      //modifico las cantidades
      let nuevoArray = cart.map((item) => {
        if (item.id === product.id) {
          item.quantity += product.quantity;
          return { ...item, quantity: product.quantity };
        } else {
          return item;
        }
      });
      setCart(nuevoArray);
    } else {
      setCart([...cart, product]);
    }
  };
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
  // total de items by id para que el contador se inicialice con el numero que hay en el carrito
  const getTotalQuantityByID = (id) => {
    let product = cart.find((element) => element.id === id);
    return product ? product.quantity : 1;
  };
  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProductById,
    getTotalAmount,
    getTotalProducts,
    getTotalQuantityByID,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
