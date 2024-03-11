"use client";

import { Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Product } from "@/data";

const StyledButton = styled(Button)({
  backgroundColor: "#4D559D",
  color: "white",
});

interface AddToCartProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
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
