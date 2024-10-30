import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, imageUrl, description, id }) => {
  return (
    <Card sx={{ width: 250, height: 440 }}>
      <CardMedia sx={{ height: 220 }} image={imageUrl} title="productos" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "text.secondary", marginTop: 3, fontWeight: "bold" }}
        >
          ${price}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Link to={`/productDetail/${id}`}>
          <Button variant="contained" size="large" color="success">
            Ver detalle
          </Button>
        </Link>
        {/* <Link to="/cart">
          <Button
            variant="contained"
            size="small"
            color="success"
            style={{ marginLeft: 10 }}
          >
            Comprar
          </Button>
        </Link> */}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
