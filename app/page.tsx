import { Box, Typography } from "@mui/material";
import { products } from "../data/index";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./components/addToCartButton";

function Home() {
  return (
    <Box component="main">
      <Typography variant="h1">Home</Typography>
      <Typography>
        Det här är startsidan. Här ska alla produkterna visas.
      </Typography>
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <Box>
            <Image
              src={product.image}
              width={200}
              height={200}
              alt={product.title}
            />
            <Typography variant="h2">{product.title}</Typography>
            <Typography>{product.description}</Typography>
            <Typography>{product.price}</Typography>
            <AddToCartButton product={product} />
          </Box>
        </Link>
      ))}
    </Box>
  );
}
export default Home;
