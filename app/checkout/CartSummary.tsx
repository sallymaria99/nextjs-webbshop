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
    <Grid
      container
      spacing={3}
      justifyContent="center"
      alignItems="center"
      marginTop={5}
    >
      {cart.map((cartItem) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={cartItem.id}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Card data-cy="cart-item" sx={{ maxWidth: 300 }}>
              <CardContent>
                <Stack direction="column" alignItems="center" spacing={1}>
                  <Image
                    src={cartItem.image}
                    alt={cartItem.title}
                    width={100}
                    height={100}
                  />
                  <Typography
                    variant="h6"
                    align="center"
                    data-cy="product-title"
                  >
                    {cartItem.title}
                  </Typography>
                  <Typography variant="body1" data-cy="product-price">
                    Price: {cartItem.quantity * cartItem.price} $
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
          </Box>
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
            <Typography data-cy="total-price" variant="h5">
              Total Price: {totalPrice} $
            </Typography>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

export default CartSummary;
