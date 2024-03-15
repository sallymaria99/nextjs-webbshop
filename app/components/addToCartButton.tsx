"use client";

import { Product } from "@/data";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useCart } from "../contexts/CartContext";

//lägga till produktknapp
interface AddToCartProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartProps) {
  const { addToCart } = useCart();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    addToCart(product);

    // Hantera klick på knappen
    // Prata med kundvagnskontexten
    // förhindra att länken följs e.preventDefault (e.stopPropagation)
  };

  return (
    <Button
      style={{
        backgroundColor: "#4D559D",
        color: "white",
      }}
      data-cy="product-buy-button"
      variant="contained"
      startIcon={<ShoppingCartOutlined />}
      onClick={handleClick}
    >
      Add to cart
    </Button>
  );
}
