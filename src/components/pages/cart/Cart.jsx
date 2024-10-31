import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  // Función para limpiar el carrito
  const limpiarConAlerta = () => {
    Swal.fire({
      title: "¿Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      denyButtonText: `No limpiar`,
      confirmButtonText: "Limpiar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito limpiado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Limpieza cancelada!", "", "info");
      }
    });
  };

  // Función para eliminar un producto con confirmación
  const eliminarConAlerta = (productId) => {
    Swal.fire({
      title: "¿Estás seguro de que quieres eliminar este producto?",
      showDenyButton: true,
      denyButtonText: "No eliminar",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProductById(productId);
        Swal.fire("Producto eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Eliminación cancelada!", "", "info");
      }
    });
  };

  return (
    <div>
      <Typography variant="h4" align="center" sx={{ marginTop: "50px" }}>
        Carrito de compras
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        {cart.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                image={product.imageUrl}
                alt={product.title}
                sx={{ height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body1">
                  Precio: ${product.price}
                </Typography>
                <Typography variant="body1">
                  Cantidad: {product.quantity}
                </Typography>
                <Typography variant="body1">
                  Subtotal: ${product.price * product.quantity}
                </Typography>
                <Button
                  onClick={() => eliminarConAlerta(product.id)}
                  variant="contained"
                  color="error"
                  sx={{ marginTop: 2 }}
                >
                  Eliminar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" sx={{ marginTop: "20px" }}>
        {total > 0 && (
          <Button
            onClick={limpiarConAlerta}
            variant="contained"
            color="warning"
          >
            Limpiar carrito
          </Button>
        )}
      </Box>
      <Box display="flex" justifyContent="center" sx={{ marginTop: "20px" }}>
        {total > 0 && (
          <Link to="/checkout">
            <Button variant="contained" color="success">
              Finalizar compra
            </Button>
          </Link>
        )}
      </Box>

      {total > 0 ? (
        <Box
          sx={{
            marginTop: "20px",
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <Typography variant="h5">Total a pagar: ${total}</Typography>
        </Box>
      ) : (
        <Typography variant="h5" align="center" sx={{ marginTop: "20px" }}>
          No se añadieron productos
        </Typography>
      )}
    </div>
  );
};

export default Cart;
