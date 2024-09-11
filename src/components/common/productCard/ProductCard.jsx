import "./productCard.css";
import Button from "@mui/material/Button";

const ProductCard = ({ nombre, precio }) => {
  return (
    <div className="card-box">
      <h2>{nombre}</h2>
      <h3>{precio}</h3>
      <Button variant="contained" color="success">
        Ver más
      </Button>
    </div>
  );
};

export default ProductCard;
