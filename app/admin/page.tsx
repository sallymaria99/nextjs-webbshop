"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IconButton, Link, Typography, makeStyles } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import AdminDelete from "../components/adminDelete";

import { useState } from "react";

import { useProducts } from "../contexts/ProductContext";
import AdminProductCard from "../components/adminProductCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

/* const useStyles = makeStyles({
  largeIcon: {
    fontSize: "3rem",
  },
});
 */
export default function AdminPage() {
  const { products } = useProducts();
  /*   const classes = useStyles(); */
  return (
    <Box component="main" sx={{ paddingBottom: "90px" }}>
      <IconButton
        component={Link}
        href="/admin/product/new"
        data-cy="admin-add-product"
        /*   className={classes.largeIcon} */
      >
        <AddCircleOutlineIcon />
      </IconButton>
      <Grid container spacing={2} justifyContent="center">
        {products.map((product) => (
          <Grid
            key={product.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
            data-cy="product"
          >
            <AdminProductCard
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
