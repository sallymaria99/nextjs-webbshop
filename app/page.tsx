"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
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
				maxWidth: "100vw",
				overflowX: "hidden",
				minHeight: "100vh",
				backgroundImage: `url("/backgroundHome.jpg")`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Grid
				container
				spacing={2}
				justifyContent="center"
				sx={{
					marginTop: "20px",
					marginBottom: "20px",
				}}
			>
				<Grid item xs={12} md={8}>
					<Box
						sx={{
							backgroundColor: "rgba(255, 255, 255, 0.5)",
							borderRadius: 4,
							boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
							width: { xs: "90%", sm: "80%", md: "70%", lg: "80%", xl: "90%" },
							maxWidth: "90%",
							padding: "20px",
							display: "flex",
							flexDirection: { xs: "column", md: "row" },
							alignItems: "center",
						}}
					>
						<Image
							src="/createice.png"
							alt="createice"
							width={150}
							height={100}
						/>
						<Typography>
							Experience the pinnacle of luxury ice at Luxice. Crafted in
							Jukkasjärvi, Sweden since 2002, our exclusive collection defines
							excellence in every chill. Elevate your moments with only the best
							– discover Luxice.
						</Typography>
					</Box>
				</Grid>
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
