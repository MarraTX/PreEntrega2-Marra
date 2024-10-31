import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import ItemList from "./itemList";
import { Skeleton, Grid } from "@mui/material";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../config-firebase";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    const itemsCollection = collection(db, "productos");
    let consulta = itemsCollection;

    if (categoryName) {
      consulta = query(itemsCollection, where("category", "==", categoryName));
    }
    getDocs(consulta).then((snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });

    console.log(items);
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
