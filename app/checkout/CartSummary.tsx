"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import DeleteButton from "../components/deleteButton";
import HandleQuantbutton from "../components/quantbutton";
import { useCart } from "../contexts/CartContext";

function CartSummary() {
	const { cart } = useCart();
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		const itemCount: any = cart.reduce(
			(total, item) => total + item.quantity * item.price,
			0
		);
		setTotalPrice(itemCount);
	}, [cart]);

	return (
		<main>
			<Box component="div">
				<h1>{totalPrice}</h1>
			</Box>
			{cart.length > 0 ? (
				cart.map((cartItem) => (
					<Container key={cartItem.id}>
						<Stack direction={"row"}>
							<Typography variant="h2">{cartItem.title}</Typography>{" "}
							<Typography variant="h4">
								{cartItem.quantity * cartItem.price}
							</Typography>
							<Image
								src={cartItem.image}
								alt={cartItem.title}
								width={50}
								height={50}
							></Image>
						</Stack>
						<HandleQuantbutton id={cartItem.id} />
						<DeleteButton id={cartItem.id} />
					</Container>
				))
			) : (
				<Typography variant="h1">Din varukorg är tom.</Typography>
			)}
		</main>
	);
}
export default CartSummary;
