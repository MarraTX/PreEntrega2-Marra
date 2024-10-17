import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetailContainer/itemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
