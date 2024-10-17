import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./productCard.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, image, description, id }) => {
  return (
    <Card sx={{ Width: 350, height: 400 }}>
      <CardMedia sx={{ height: 220 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "text.secondary", marginTop: "10px" }}
        >
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/cart">
          {" "}
          <Button variant="contained" size="small">
            Comprar
          </Button>
        </Link>
        <Link to={"/productDetail/${id}"}>
          {" "}
          <Button variant="contained" color="secondary" size="small">
            Ver más
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
