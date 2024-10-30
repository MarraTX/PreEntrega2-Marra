import React from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";
import { Typography } from "@mui/material";

const ItemDetail = ({ item, onAdd, totalItemsAgregados }) => {
  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <h1>{item.title}</h1>

        <img
          src={item.imageUrl}
          alt={item.title}
          style={{
            width: "250px",
            height: "auto",
            borderRadius: "10px",
            border: "1px solid #424141",
          }}
        />
        <Typography variant="body2" fontSize={16} marginTop={2}>
          {item.description}
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "green", marginTop: 3, fontWeight: "bold" }}
        >
          Precio: {item.price}
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "text.secondary", marginTop: 3, fontWeight: "bold" }}
        >
          Categoría: {item.category}
        </Typography>
        {/* <p>Ya tienes {totalItemsAgregados} unidades en el carrito.</p> */}
        <CounterContainer
          onAdd={onAdd}
          stock={item.stock}
          totalItemsAgregados={totalItemsAgregados}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
