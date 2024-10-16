import Navbar from "./components/layouts/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetailContainer/itemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const saludo = "Hola!";
  return (
    <div>
      <Navbar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
