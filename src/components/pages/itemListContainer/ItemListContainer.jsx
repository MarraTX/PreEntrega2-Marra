import { useEffect } from "react";
import { products } from "../../../productsMock";
import { useState } from "react";
import ItemList from "./itemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let isLogged = true;
      if (isLogged) {
        resolve(products);
      } else {
        reject({ error: "Hubo un error" });
      }
    });

    getProducts
      .then((response) => {
        console.log("se entra en el then", response);
        setItems(response);
      })
      .catch((error) => {
        console.log("se entra en el catch", error);
      });
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
