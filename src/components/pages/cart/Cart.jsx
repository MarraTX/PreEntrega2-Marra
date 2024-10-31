import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  const limpiarConAlerta = () => {
    Swal.fire({
      title: "¿Seguro quieres limpiar el carrito?",
      showDenyButton: true,
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
    <div className="p-4">
      <Box
        className="mx-auto max-w-md px-4 py-2 mb-8"
        sx={{
          backgroundColor: "#f3f4f6",
          borderRadius: "8px",
          borderBottom: "4px solid #000",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "black", fontWeight: "bold" }}
        >
          Carrito de Compras
        </Typography>
      </Box>

      <Grid container spacing={3} className="mt-6">
        {cart.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card className="shadow-lg hover:shadow-xl transition duration-300">
              <CardMedia
                component="img"
                image={product.imageUrl}
                alt={product.title}
                className="h-52 object-cover"
              />
              <CardContent>
                <Typography variant="h6" className="font-bold text-gray-800">
                  {product.title}
                </Typography>
                <Typography variant="body1">
                  Precio: ${product.price}
                </Typography>
                <Typography variant="body1">
                  Cantidad: {product.quantity}
                </Typography>
                <Typography variant="body1">
                  Subtotal: ${product.price * product.quantity}
                </Typography>
                <Box className="flex justify-end mt-3">
                  <IconButton
                    onClick={() => eliminarConAlerta(product.id)}
                    color="error"
                    className="hover:bg-red-200"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box className="flex justify-center mt-6 space-x-4">
        {total > 0 && (
          <>
            <Button
              onClick={limpiarConAlerta}
              variant="contained"
              color="warning"
              startIcon={<CleaningServicesIcon />}
            >
              Limpiar carrito
            </Button>
            <Link to="/checkout">
              <Button
                variant="contained"
                color="success"
                startIcon={<ShoppingCartCheckoutIcon />}
              >
                Finalizar compra
              </Button>
            </Link>
          </>
        )}
      </Box>

      {total > 0 ? (
        <Box className="mt-6 p-4 border border-gray-300 rounded-lg text-center bg-gray-50">
          <Typography variant="h5" className="text-black-700 font-semibold">
            Total a pagar: ${total}
          </Typography>
        </Box>
      ) : (
        <Typography variant="h5" align="center" className="mt-6 text-gray-600">
          No se añadieron productos
        </Typography>
      )}
    </div>
  );
};

export default Cart;
