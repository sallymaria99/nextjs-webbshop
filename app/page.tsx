"use client";
import { Box, Grid, Typography } from "@mui/material";
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
				backgroundImage: `url("/backgroundHome.jpg")`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<Grid
				container
				spacing={1}
				justifyContent="center"
				sx={{
					backgroundColor: "rgba(255, 255, 255, 0.7)",
					borderRadius: 4,
					boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
					width: "auto",
				}}
			>
				<Typography>
					Experience the pinnacle of luxury ice at Luxice. Crafted in
					Jukkasjärvi, Sweden since 2002, our exclusive collection defines
					excellence in every chill. Elevate your moments with only the best –
					discover Luxice.
				</Typography>
			</Grid>
			<Grid container spacing={2} justifyContent="center">
				{products.map((product) => (
					<Grid
						key={product.id}
						data-cy="product-id"
						item
						xs={12}
						sm={6}
						md={4}
						lg={3}
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
