import React from "react";
import CounterContainer from "../../common/counter/CounterContainer";

const itemDetail = ({ item }) => {
  console.log(item);
  return (
    <div>
      <h1>{item.title}</h1>
      <img
        src={item.imageUrl}
        alt={item.title}
        style={{ width: "200px", height: "auto" }}
      />
      <p>{item.description}</p>
      <p>Precio: {item.price}</p>
      <p>Categoría: {item.category}</p>
      <CounterContainer />
    </div>
  );
};

export default itemDetail;
