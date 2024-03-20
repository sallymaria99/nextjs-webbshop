"use client";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import DeleteButton from "../components/deleteButton";
import HandleQuantbutton from "../components/quantbutton";
import { useCart } from "../contexts/CartContext";

function CartSummary() {
  const { cart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const itemCount: any = cart.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotalPrice(itemCount);
  }, [cart]);

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      {cart.map((cartItem) => (
        <Grid item xs={10} key={cartItem.id}>
          <Card data-cy="cart-item">
            <CardContent>
              <Stack direction="column" alignItems="center" spacing={1}>
                <Image
                  src={cartItem.image}
                  alt={cartItem.title}
                  width={100}
                  height={100}
                />
                <Typography variant="h6" align="center">
                  {cartItem.title}
                </Typography>
                <Typography variant="body1">
                  Price: {cartItem.quantity * cartItem.price} SEK
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <HandleQuantbutton id={cartItem.id} />
                  <DeleteButton id={cartItem.id} />
                </div>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {cart.length === 0 && (
        <Grid item xs={12} marginTop={2}>
          <Typography variant="h6" textAlign="center">
            Your cart is empty.
          </Typography>
        </Grid>
      )}
      {cart.length > 0 && (
        <Grid item xs={12}>
          <Box textAlign="center">
            <Typography variant="h5">Total Price: {totalPrice} SEK</Typography>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

export default CartSummary;
