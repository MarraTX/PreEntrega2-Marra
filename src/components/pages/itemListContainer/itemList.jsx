import React from "react";
import ProductCard from "../../common/productCard/ProductCard";

const itemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      {items.map((item) => {
        return (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.imageUrl}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default itemList;
