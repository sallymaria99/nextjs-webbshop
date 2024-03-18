"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AddressForm from "./AdressForm";
//import PaymentForm from "./PaymentForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";

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

const steps = ["Shipping address", "Review your order and submit"];

//"Payment details",

function getStepContent(step: number) {
	switch (step) {
		case 0:
			return <AddressForm />;
			//	case 1:
			return <PaymentForm />;
		case 1:
			return <Review />;
		default:
			throw new Error("Unknown step");
	}
}

export default function Checkout() {
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

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
				{/* <Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
						Company name
					</Typography>
				</Toolbar> */}
			</AppBar>
			<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
				<Paper
					variant="outlined"
					sx={{ my: { xs: 6, md: 14 }, p: { xs: 2, md: 3 } }}
				>
					<Typography component="h1" variant="h4" align="center">
						Checkout
					</Typography>
					<Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length ? (
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
					) : (
						<React.Fragment>
							{getStepContent(activeStep)}
							<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
								{activeStep !== 0 && (
									<Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
										Back
									</Button>
								)}
								<Button
									variant="contained"
									onClick={handleNext}
									sx={{ mt: 3, ml: 1 }}
								>
									{activeStep === steps.length - 1 ? "Submit order" : "Next"}
								</Button>
							</Box>
						</React.Fragment>
					)}
				</Paper>
				<Copyright />
			</Container>
		</React.Fragment>
	);
}
