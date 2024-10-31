import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetailContainer/itemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import { CartContextProvider } from "./context/CartContext";
import Checkout from "./components/pages/checkout/Checkout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route
              path={"/category/:categoryName"}
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<CartContainer />}></Route>
            <Route
              path="/productDetail/:id"
              element={<ItemDetailContainer />}
            ></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route
              path="*"
              element={
                <h2
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "50px",
                  }}
                >
                  404 not found
                </h2>
              }
            ></Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
