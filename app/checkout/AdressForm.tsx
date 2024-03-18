import { zodResolver } from "@hookform/resolvers/zod";
import { Button, FormHelperTextProps } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Post, PostSchema } from "./Postschema";

export default function AddressForm() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const form = useForm<Post>({
		defaultValues: { id: nanoid() },
		resolver: zodResolver(PostSchema),
	});

	const save = (data: Post) => {
		console.log(data);
		setIsSubmitted(true);
	};

	return (
		<form data-cy="customer-form" onSubmit={form.handleSubmit(save)}>
			<Typography variant="h6" gutterBottom>
				Shipping address
			</Typography>
			x
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						{...form.register("customerName")}
						label="Customer name"
						fullWidth
						autoComplete="given-name"
						variant="standard"
						inputProps={{ "data-cy": "customer-name" }}
						FormHelperTextProps={
							{ "data-cy": "customer-name-error" } as FormHelperTextProps
						}
						error={Boolean(form.formState.errors.customerName)}
						helperText={form.formState.errors.customerName?.message}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						{...form.register("email")}
						label="Email"
						fullWidth
						autoComplete="email"
						variant="standard"
						inputProps={{ "data-cy": "customer-email" }}
						FormHelperTextProps={
							{ "data-cy": "customer-email-error" } as FormHelperTextProps
						}
						error={Boolean(form.formState.errors.email)}
						helperText={form.formState.errors.email?.message}
					/>
				</Grid>

				<Grid item xs={12}>
					<TextField
						{...form.register("address")}
						label="Address"
						fullWidth
						autoComplete="shipping address"
						variant="standard"
						inputProps={{ "data-cy": "customer-address" }}
						FormHelperTextProps={
							{ "data-cy": "customer-address-error" } as FormHelperTextProps
						}
						error={Boolean(form.formState.errors.address)}
						helperText={form.formState.errors.address?.message}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						{...form.register("city")}
						label="City"
						fullWidth
						autoComplete="shipping address-level2"
						variant="standard"
						inputProps={{ "data-cy": "customer-city" }}
						FormHelperTextProps={
							{ "data-cy": "customer-city-error" } as FormHelperTextProps
						}
						error={Boolean(form.formState.errors.city)}
						helperText={form.formState.errors.city?.message}
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField
						{...form.register("zipcode")}
						name="zipcode"
						label="Zipcode"
						fullWidth
						autoComplete="shipping postal-code"
						variant="standard"
						inputProps={{ "data-cy": "customer-zipcode" }}
						FormHelperTextProps={
							{ "data-cy": "customer-zipcode-error" } as FormHelperTextProps
						}
						error={Boolean(form.formState.errors.zipcode)}
						helperText={form.formState.errors.zipcode?.message}
					/>
					<TextField
						{...form.register("phone")}
						id="phone"
						name="phone"
						label="Phone"
						fullWidth
						autoComplete="tel"
						variant="standard"
						inputProps={{ "data-cy": "customer-phone" }}
						FormHelperTextProps={
							{ "data-cy": "customer-phone-error" } as FormHelperTextProps
						}
						error={Boolean(form.formState.errors.phone)}
						helperText={form.formState.errors.phone?.message}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						{...form.register("country")}
						id="country"
						name="country"
						label="Country"
						fullWidth
						autoComplete="shipping country"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12}>
					{!isSubmitted && (
						<Button type="submit" variant="contained" color="primary">
							Save Shipping address
						</Button>
					)}
				</Grid>
			</Grid>
		</form>
	);
}
