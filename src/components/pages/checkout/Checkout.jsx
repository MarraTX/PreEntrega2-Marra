import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../config-firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cart, getTotalAmount, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    // validaciones
    let total = getTotalAmount();
    const order = {
      buyer: user,
      items: cart,
      total,
    };

    // validación de campos
    const newErrors = {};

    if (!user.name) {
      newErrors.name = "El nombre es requerido.";
    } else if (!/^[a-zA-Z\s]+$/.test(user.name)) {
      newErrors.name = "El nombre solo puede contener letras.";
    }

    if (!user.phone) {
      newErrors.phone = "El teléfono es requerido.";
    } else if (!/^\d+$/.test(user.phone)) {
      newErrors.phone = "El teléfono solo puede contener números.";
    }

    if (!user.email) {
      newErrors.email = "El correo electrónico es requerido.";
    } else if (!user.email.includes("@")) {
      newErrors.email = "El correo electrónico debe contener '@'.";
    }

    // si hay errores, actualiza el estado y detiene el sbmit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    // Guardar la orden en Firebase
    let refCollection = collection(db, "orders");
    addDoc(refCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    order.items.forEach((elemento) => {
      updateDoc(doc(db, "productos", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={80} color="success" />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Procesando compra...
        </Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4, p: 2 }}>
      {orderId ? (
        <Box
          sx={{
            mt: 4,
            p: 3,
            textAlign: "center",
            background: "linear-gradient(135deg, #e0f7fa, #b2ebf2)",
            color: "#006064",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <CheckCircleOutlineIcon
            sx={{ fontSize: 50, color: "#00796b", mb: 1 }}
          />
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            ¡Gracias por tu compra!
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
            Tu número de orden es: <strong>{orderId}</strong>
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "#004d40" }}>
            En breve recibirás un correo con los detalles de tu pedido.
          </Typography>
        </Box>
      ) : (
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            name="name"
            value={user.name}
            sx={{ mb: 2 }}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Teléfono"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            name="phone"
            value={user.phone}
            sx={{ mb: 2 }}
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            name="email"
            value={user.email}
            sx={{ mb: 2 }}
            error={!!errors.email}
            helperText={errors.email}
          />
          <Button
            variant="contained"
            color="success"
            size="large"
            type="submit"
            fullWidth
            sx={{ mt: 2 }}
          >
            Comprar
          </Button>
        </form>
      )}
      {/* Hero Banner */}
      <Box
        sx={{
          mt: 4,
          maxWidth: "90vw",
          mx: "auto",
          p: 4,
          textAlign: "center",
          background: "#000",
          color: "white",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          ¿Por qué comprar con nosotros?
        </Typography>
        <Typography variant="body1">
          Somos un emprendimiento familiar que prioriza la confianza y la
          calidad en cada uno de nuestros productos. ¡Tu satisfacción es nuestra
          mayor garantía!
        </Typography>
      </Box>
    </Container>
  );
};

export default Checkout;
