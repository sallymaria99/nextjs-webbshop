"use client";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { BadgeProps } from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CustomizedBadges() {
  const { cart } = useCart();
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const itemCount: any = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalItems(itemCount);
    console.log("hej");
  }, [cart]);
  return (
    <IconButton aria-label="cart">
      <StyledBadge
        badgeContent={totalItems}
        color="secondary"
        data-cy="cart-items-count-badge"
      >
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
