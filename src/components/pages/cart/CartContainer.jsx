import Ract, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const {
    cart,
    clearCart,
    deleteProductById,
    getTotalAmount,
    getTotalProducts,
  } = useContext(CartContext);

  let total = getTotalAmount();
  let totalProducts = getTotalProducts();
  return (
    <Cart
      cart={cart}
      clearCart={clearCart}
      deleteProductById={deleteProductById}
      total={total}
      totalProducts={totalProducts}
    />
  );
};

export default CartContainer;
