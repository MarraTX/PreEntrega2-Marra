import FetchingDataContainer from "./components/fetchingData/FetchingDataContainer";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const saludo = "Hola!";
  return (
    <div>
      {/* <Navbar />
      <ItemListContainer greeting={saludo} /> */}
      <FetchingDataContainer />
    </div>
  );
}

export default App;
