import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const saludo = "Hola!";
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={saludo} />
    </div>
  );
}

export default App;
