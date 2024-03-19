"use client";
import { Box, Grid, Typography } from "@mui/material";
import MultiActionAreaCard from "./components/productCard";
import { useProducts } from "./contexts/ProductContext";

function Home() {
	const { products } = useProducts();
	return (
		<Box component="main" data-cy="product-id">
			<Typography variant="h1">Home</Typography>
			<Typography>
				Det här är startsidan. Här ska alla produkterna visas.
			</Typography>
			<Grid container spacing={2} justifyContent="center" alignContent="center">
				{products.map((product) => (
					<Grid key={product.id} item xs={8} data-cy="product">
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
