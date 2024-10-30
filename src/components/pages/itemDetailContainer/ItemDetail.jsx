import React from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ item, onAdd }) => {
  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <h1>{item.title}</h1>

        <img
          src={item.imageUrl}
          alt={item.title}
          style={{ width: "200px", height: "auto" }}
        />
        <p>{item.description}</p>
        <p>Precio: {item.price}</p>
        <p>Categoría: {item.category}</p>
        <CounterContainer onAdd={onAdd} stock={item.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
