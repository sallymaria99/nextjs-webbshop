"use client";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, IconButton, Typography } from "@mui/material";
import { useCart } from "../contexts/CartContext";

interface ProductId {
	id: string;
}

export default function Quantbutton(props: ProductId) {
	const { cart } = useCart();
	const item = cart.find((cartItem) => cartItem.id === props.id);

	const { addToCart } = useCart();
	function handleIncrement() {
		if (item) {
			addToCart(item);
		}
	}
	const { removeFromCart } = useCart();
	function handleDecrement() {
		if (item) {
			removeFromCart(item.id);
		}
	}
	return (
		<>
			<Box display="flex" alignItems="center">
				<IconButton
					onClick={handleIncrement}
					data-cy="decrease-quantity-button"
				>
					<AddIcon />
				</IconButton>
				<Typography variant="h6" data-cy="product-quantity">
					{item ? item.quantity : 0}
				</Typography>{" "}
				<IconButton
					onClick={handleDecrement}
					disabled={!item || item.quantity <= 0}
					data-cy="decrease-quantity-button"
				>
					<RemoveIcon />
				</IconButton>
			</Box>
		</>
	);
}
