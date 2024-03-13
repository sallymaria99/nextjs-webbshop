import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { products } from "../data/index";
import MultiActionAreaCard from "./components/productCard";

function Home() {
  return (
    <Box component="main" data-cy="product">
      <Typography variant="h1">Home</Typography>
      <Typography>
        Det här är startsidan. Här ska alla produkterna visas.
      </Typography>
      {products.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          data-cy="product-id"
        >
          <MultiActionAreaCard
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        </Link>
      ))}
    </Box>
  );
}
export default Home;
