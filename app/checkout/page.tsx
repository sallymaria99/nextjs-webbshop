"use client";
import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useCart } from "../contexts/CartContext";

function CheckoutPage() {
  const { cart } = useCart();
  return (
    <main>
      {cart.length > 0 ? (
        cart.map((cartItem) => (
          <Container key={cartItem.id}>
            <Stack direction={"row"}>
              <Typography variant="h2">{cartItem.title}</Typography>{" "}
              <Image
                src={cartItem.image}
                alt={cartItem.title}
                width={50}
                height={50}
              ></Image>
            </Stack>
          </Container>
        ))
      ) : (
        <Typography variant="h1">Din varukorg är tom.</Typography>
      )}
    </main>
  );
}

export default CheckoutPage;
