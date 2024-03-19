"use client";
import { Box, Grid, Typography } from "@mui/material";
import { products } from "../data/index";
import MultiActionAreaCard from "./components/productCard";
import { useProducts } from "./contexts/ProductContext";

function Home() {
  const { products } = useProducts();
  return (
    <Box
      component="main"
      data-cy="product"
      sx={{
        width: "100%",
        backgroundImage: `url("/backgroundHome.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography variant="h1" textAlign="center">
        Home
      </Typography>
      <Typography>
        Det här är startsidan. Här behöver vi en liten om oss.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {products.map((product) => (
          <Grid
            key={product.id}
            data-cy="product-id"
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={3}
          >
            <MultiActionAreaCard
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
export default Home;
