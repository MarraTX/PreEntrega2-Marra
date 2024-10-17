import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import ItemList from "./itemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]); // undefined.title

  const { categoryName } = useParams(); // {} -- { categoryName }
  console.log(categoryName);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === categoryName
    );
    const getProducts = new Promise((res, rej) => {
      let isLogued = true;
      if (isLogued) {
        res(categoryName ? filteredProducts : products);
      } else {
        rej({ message: "algo salio mal" });
      }
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log("entro en el catch ", error);
      });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;

// const sumar = ( a )=>{
//   let pepe = "dsad"

// }

// console.log( pepe )

// console.log( a )
