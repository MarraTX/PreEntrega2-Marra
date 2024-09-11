import ProductCard from "../../common/productCard/ProductCard";
import "./itemListContainer.css";
const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container-prod">
      <h1>Listado de productos</h1>
      <div className="container-card">
        <ProductCard nombre="Fango" precio={"$" + 3000} />
        <ProductCard nombre="Bruma" precio={"$" + 2000} />
        <ProductCard nombre="Sales" precio={"$" + 1000} />
      </div>
      <h4>{greeting}</h4>
    </div>
  );
};

export default ItemListContainer;
