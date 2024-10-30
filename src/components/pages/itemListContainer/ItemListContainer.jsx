import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import ItemList from "./itemList";
import { Skeleton, Grid } from "@mui/material";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    const loadProducts = async () => {
      let filteredProducts = products.filter(
        (product) => product.category === categoryName
      );

      if (categoryName === undefined) {
        await new Promise((res) => setTimeout(res, 500));
        setItems(products);
      } else {
        setItems(filteredProducts);
      }
      setLoading(false);
    };

    loadProducts();
  }, [categoryName]);

  return (
    <Grid container spacing={2} justifyContent="center">
      {loading ? (
        // Muestra Skeletons en lugar de ItemList mientras se carga
        Array.from(new Array(4)).map((_, index) => (
          <Grid item key={index}>
            <Skeleton
              variant="rectangular"
              width={250}
              height={400}
              sx={{ borderRadius: 2, marginTop: 5 }}
            />
          </Grid>
        ))
      ) : (
        <ItemList items={items} />
      )}
    </Grid>
  );
};

export default ItemListContainer;

// const sumar = ( a )=>{
//   let pepe = "dsad"

// }

// console.log( pepe )

// console.log( a )
