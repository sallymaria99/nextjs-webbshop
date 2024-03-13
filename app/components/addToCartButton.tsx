"use client";

import { Product } from "@/data";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, styled } from "@mui/material";
import { useCart } from "../contexts/CartContext";

const StyledButton = styled(Button)({
  backgroundColor: "#4D559D",
  color: "white",
});

//lägga till produktknapp
interface AddToCartProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartProps) {
  const { addToCart } = useCart();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    addToCart(product);
    console.log("hej");
    // Hantera klick på knappen
    // Prata med kundvagnskontexten
    // förhindra att länken följs e.preventDefault (e.stopPropagation)
  };

  return (
    <StyledButton
      variant="contained"
      startIcon={<ShoppingCartIcon />}
      onClick={handleClick}
    >
      Add to cart
    </StyledButton>
  );
}
