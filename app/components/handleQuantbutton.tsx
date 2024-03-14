"use client";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, IconButton, Typography } from "@mui/material";
import { useCart } from "../contexts/CartContext";

interface ProductId {
  id: string;
}

export default function HandleQuantbutton(props: ProductId) {
  const { cart } = useCart();
  const item = cart.find((cartItem) => cartItem.id === props.id);

  const { addToCart } = useCart();
  function handleIncrement() {
    if (item) {
      addToCart(item);
    }
  }
  const { removeFromCart } = useCart();
  function handleDecrement() {
    if (item) {
      removeFromCart(item.id);
    }
  }
  return (
    <>
      <Box component="div">
        <IconButton onClick={handleIncrement}>
          <AddIcon />
        </IconButton>
        <Typography variant="h6">{item ? item.quantity : 0}</Typography>{" "}
        <IconButton
          onClick={handleDecrement}
          disabled={!item || item.quantity <= 0}
        >
          <RemoveIcon />
        </IconButton>
      </Box>
    </>
  );
}
