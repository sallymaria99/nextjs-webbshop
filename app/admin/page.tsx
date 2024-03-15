"use client";
import { products } from "@/data";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AdminPage() {
  return (
    <Box component="main" data-cy="product">
      <Box sx={{ flexGrow: 1 }}>
        {products.map((product) => (
          <Grid key={product.id} data-cy="product-id" item xs={8}>
            <Item>
              <Image
                src={product.image}
                width={100}
                height={100}
                alt={product.title}
              />
              <p>{product.description}</p>
            </Item>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}
