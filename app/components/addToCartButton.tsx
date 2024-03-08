import { Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AddToCartButton = styled(Button)({
  backgroundColor: "#4D559D",
  color: "white",
});

interface AddToCartProps {
  onAddToCart: () => void;
}

export default function AddToCart({ onAddToCart }: AddToCartProps) {
  return (
    <AddToCartButton
      variant="contained"
      startIcon={<ShoppingCartIcon />}
      onClick={onAddToCart}
    >
      Add to cart
    </AddToCartButton>
  );
}
