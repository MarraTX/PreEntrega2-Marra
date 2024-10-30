import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  // if con return temprano

  // if (items.length === 0) {
  //   return <h1>Cargando...</h1>;
  // }

  // if con ternario

  // {items.length > 0 ? (
  //   items.map((item) => {
  //     return <ProductCard key={item.id} {...item} />;
  //   })
  // ) : (
  //   <h1>Cargando...</h1>
  // )}

  // operador &&

  // {total > 0 && (algo)}

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "50px",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ItemList;
