import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";

export const CartWidgets = () => {
  return (
    <div>
      <Badge badgeContent={3} color="warning">
        <ShoppingCartOutlinedIcon
          style={{ color: "#FFF", display: "flex", alignItems: "center" }}
        />
      </Badge>
    </div>
  );
};
