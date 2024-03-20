/* use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AddressForm from "./AdressForm";
//import PaymentForm from "./PaymentForm";

function Copyright() {
	//länken längst ner
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			sx={{ pb: 1 }}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Luxice
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}




export default function Checkout() {
	

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position="absolute"
				color="default"
				elevation={0}
				sx={{
					position: "relative",
					borderBottom: (t) => `${t.palette.divider}`,
				}}
			>
			
			</AppBar>
			<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
				<Paper
					variant="outlined"
					sx={{ my: { xs: 6, md: 14 }, p: { xs: 2, md: 3 } }}
				>
					<Typography component="h1" variant="h4" align="center">
						Checkout
					</Typography>
					
					
						<React.Fragment>
							<Typography variant="subtitle1" gutterBottom>
								Your satisfaction is our top priority, and we are committed to
								delivering only the finest quality products to your doorstep.
								Our team will be working diligently to ensure that your order
								will be processed promptly and delivered to you on time. Thank
								you for buying our quality ice, we look forward in serving you
								once again in the future.
							</Typography>
							<Typography variant="subtitle2">
								Your order number is #2001539. We have emailed your order
								confirmation, and will send you an update when your order has
								shipped. Have an splendid day.
							</Typography>
						</React.Fragment>		
						
				</Paper>
				<Copyright />
			</Container>
		</React.Fragment>
	);
} */
