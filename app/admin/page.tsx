"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IconButton, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import AdminDelete from "../components/adminDelete";

import { useProducts } from "../contexts/ProductContext";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function AdminPage() {
	const { products } = useProducts();

	return (
		<Box component="main" data-cy="product">
			<IconButton
				component={Link}
				href="/admin/product/new"
				data-cy="admin-add-product"
			>
				<AddCircleOutlineIcon />
			</IconButton>

			<Box sx={{ flexGrow: 1 }}>
				{products.map((product) => (
					<Grid key={product.id} data-cy="product-id" item xs={8}>
						<Item>
							<Link href={`/admin/product/${product.id}`}>
								<Image
									src={product.image}
									width={100}
									height={100}
									alt={product.title}
								/>
							</Link>
							<p>{product.description}</p>
							<AdminDelete id={product.id} />
						</Item>
					</Grid>
				))}
			</Box>
		</Box>
	);
}
