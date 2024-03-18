import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function PaymentForm() {
	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Payment method
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cardName"
						label="Name on card"
						fullWidth
						autoComplete="cc-name"
						variant="standard"
						helperText="The name as it appears on your card"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cardNumber"
						label="Card number"
						fullWidth
						autoComplete="cc-number"
						variant="standard"
						helperText="The 16-digit number on your card"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="expDate"
						label="Expiry date"
						fullWidth
						autoComplete="cc-exp"
						variant="standard"
						helperText="The expiry date of your card (MM/YYYY)"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cvv"
						label="CVV"
						fullWidth
						autoComplete="cc-csc"
						variant="standard"
						helperText="Last three digits on signature strip"
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={<Checkbox color="secondary" name="saveCard" value="yes" />}
						label="Remember credit card details for next time"
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
