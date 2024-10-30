import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
export const CartWidgets = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <Badge
        badgeContent={cart.length}
        color="warning"
        max={50}
        showZero={true}
      >
        <ShoppingCartOutlinedIcon
          style={{ color: "#FFF", display: "flex", alignItems: "center" }}
        />
      </Badge>
    </div>
  );
};
