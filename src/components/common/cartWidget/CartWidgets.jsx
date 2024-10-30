import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
export const CartWidgets = () => {
  const { getTotalProducts } = useContext(CartContext);
  let totalProducts = getTotalProducts();
  return (
    <div>
      <Badge
        badgeContent={totalProducts}
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
