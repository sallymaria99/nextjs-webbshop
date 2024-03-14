import { zodResolver } from "@hookform/resolvers/zod";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { nanoid } from "nanoid";
import * as React from "react";
import { useForm } from "react-hook-form";
import { Post, PostSchema } from "./Postschema";

export default function AddressForm() {
	const form = useForm<Post>({
		defaultValues: { id: nanoid() },
		resolver: zodResolver(PostSchema),
	});

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Shipping address
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="firstName"
						label="First name"
						fullWidth
						autoComplete="given-name"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="lastName"
						name="lastName"
						label="Last name"
						fullWidth
						autoComplete="family-name"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						id="email"
						name="email"
						label="Email"
						fullWidth
						autoComplete="given-name"
						variant="standard"
						helperText="Enter a valid email"
					/>
				</Grid>

				<Grid item xs={12}>
					<TextField
						required
						id="address1"
						name="address1"
						label="Address line 1"
						fullWidth
						autoComplete="shipping address-line1"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="city"
						name="city"
						label="City"
						fullWidth
						autoComplete="shipping address-level2"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						id="state"
						name="state"
						label="State/Province/Region"
						fullWidth
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="zip"
						name="zip"
						label="Zip / Postal code"
						fullWidth
						autoComplete="shipping postal-code"
						variant="standard"
						helperText="4 digits or more"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="country"
						name="country"
						label="Country"
						fullWidth
						autoComplete="shipping country"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={
							<Checkbox color="secondary" name="saveAddress" value="yes" />
						}
						label="Use this address for payment details"
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
