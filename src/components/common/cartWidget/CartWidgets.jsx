import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";

export const CartWidgets = () => {
  return (
    <div>
      <Badge badgeContent={10} color="warning" max={9} showZero={true}>
        <ShoppingCartOutlinedIcon
          style={{ color: "#FFF", display: "flex", alignItems: "center" }}
        />
      </Badge>
    </div>
  );
};
