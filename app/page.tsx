import { Box, Grid, Typography } from "@mui/material";
import { products } from "../data/index";
import MultiActionAreaCard from "./components/productCard";

function Home() {
  return (
    <Box component="main" data-cy="product">
      <Typography variant="h1">Home</Typography>
      <Typography>
        Det här är startsidan. Här ska alla produkterna visas.
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignContent="center">
        {products.map((product) => (
          <Grid key={product.id} data-cy="product-id" item xs={8}>
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
