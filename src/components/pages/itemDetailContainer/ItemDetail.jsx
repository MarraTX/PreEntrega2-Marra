import React from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { Typography } from "@mui/material";

const ItemDetail = ({ item, onAdd, totalItemsAgregados }) => {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          {item.title}
        </h1>

        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-64 object-cover rounded-lg border border-gray-300 shadow-md mb-6"
        />

        <Typography
          variant="body2"
          fontSize={16}
          className="text-gray-600 mb-4"
        >
          {item.description}
        </Typography>

        <Typography
          variant="h5"
          sx={{ fontWeight: "bold" }}
          className="text-black-600 text-2xl mt-4"
        >
          ${item.price}
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: "bold" }}
          className="text-gray-500 mt-2"
        >
          Categoría: {item.category}
        </Typography>

        {/* {totalItemsAgregados > 0 && (
          <div className="text-gray-800 text-xl font-semibold mt-4">
            Tienes {totalItemsAgregados} en el carrito.
          </div>
        )} */}

        <div className="mt-8">
          <CounterContainer
            onAdd={onAdd}
            stock={item.stock}
            totalItemsAgregados={totalItemsAgregados}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
