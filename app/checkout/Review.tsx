import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
//import console from "console";
import * as React from "react";
import { useCart } from "../contexts/CartContext";

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];

//let sum: number = 0;
//export function SumOrder() {
//	const [totalPrice] = useState(0);
//	console.log("getting totalprice state");
//	console.log(totalPrice);
//	sum = totalPrice;
//}

export function GenerateQuantity() {}

export default function Review() {
	const { cart } = useCart();
	const [totalPrice, setTotalPrice] = React.useState(0);

	React.useEffect(() => {
		const itemCount: any = cart.reduce(
			(total, item) => total + item.quantity * item.price,
			0
		);
		setTotalPrice(itemCount);
	}, [cart]);

	//	console.log(totalPrice);

	//SumOrder();
	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Order summary
			</Typography>
			<List disablePadding>
				{cart.map((item) => (
					<ListItem key={item.title} sx={{ py: 1, px: 0 }}>
						<ListItemText primary={item.title} secondary={item.description} />
						<Typography variant="body2">
							{item.price * item.quantity}
						</Typography>
					</ListItem>
				))}
				<ListItem sx={{ py: 1, px: 0 }}>
					<ListItemText primary="Total" />
					<Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
						{totalPrice}
					</Typography>
				</ListItem>
			</List>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
						Shipping
					</Typography>
					<Typography gutterBottom>John Smith</Typography>
					<Typography gutterBottom>{addresses.join(", ")}</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
