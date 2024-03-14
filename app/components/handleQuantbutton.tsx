import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Typography } from "@mui/material";
import { useCart } from "../contexts/CartContext";

interface ProductId {
  id: string;
}

export default function HandleQuantbutton(props: ProductId) {
  const { cart } = useCart();
  const item = cart.find((cartItem) => cartItem.id === props.id);

  return (
    <>
      <Box component="div">
        <RemoveIcon />
        <Typography variant="h6">{item ? item.quantity : 0}</Typography>{" "}
        <AddIcon />
      </Box>
    </>
  );
}
