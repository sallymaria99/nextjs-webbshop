import { zodResolver } from "@hookform/resolvers/zod";
import { Button, FormHelperTextProps, InputProps } from "@mui/material";
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
		<form onSubmit={form.handleSubmit(save)}>
			<Typography variant="h6" gutterBottom>
				Shipping address
			</Typography>

			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						{...form.register("firstName")}
						required
						label="First name"
						fullWidth
						autoComplete="given-name"
						variant="standard"
						InputProps={{ "data-cy": "customer-name" } as InputProps}
						FormHelperTextProps={
							{ "data-cy": "customer-name-error" } as FormHelperTextProps
						}
						error={Boolean(form.formState.errors.firstName)}
						helperText={form.formState.errors.firstName?.message}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						{...form.register("lastName")}
						required
						label="Last name"
						fullWidth
						autoComplete="family-name"
						variant="standard"
						InputProps={{ "data-cy": "customer-name" } as InputProps}
						FormHelperTextProps={
							{ "data-cy": "customer-name-error" } as FormHelperTextProps
						}
						error={Boolean(form.formState.errors.lastName)}
						helperText={form.formState.errors.lastName?.message}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						{...form.register("email")}
						required
						label="Email"
						fullWidth
						autoComplete="email"
						variant="standard"
						InputProps={{ "data-cy": "customer-email" } as InputProps}
						FormHelperTextProps={
							{ "data-cy": "customer-email-error" } as FormHelperTextProps
						}
						error={Boolean(form.formState.errors.email)}
						helperText={form.formState.errors.email?.message}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						{...form.register("address")}
						required
						label="Address"
						fullWidth
						autoComplete="shipping address"
						variant="standard"
						InputProps={{ "data-cy": "customer-address" } as InputProps}
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
						required
						label="City"
						fullWidth
						autoComplete="shipping address-level2"
						variant="standard"
						InputProps={{ "data-cy": "customer-city" } as InputProps}
						FormHelperTextProps={
							{ "data-cy": "customer-city-error" } as FormHelperTextProps
						}
						error={Boolean(form.formState.errors.city)}
						helperText={form.formState.errors.city?.message}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						{...form.register("country")}
						required
						id="country"
						name="country"
						label="Country"
						fullWidth
						autoComplete="shipping country"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						{...form.register("zipcode")}
						required
						name="zipcode"
						label="Zipcode"
						fullWidth
						autoComplete="shipping postal-code"
						variant="standard"
						InputProps={{ "data-cy": "customer-zipcode" } as InputProps}
						FormHelperTextProps={
							{ "data-cy": "customer-zipcode-error" } as FormHelperTextProps
						}
						error={Boolean(form.formState.errors.zipcode)}
						helperText={form.formState.errors.zipcode?.message}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						{...form.register("phone")}
						required
						id="phone"
						name="phone"
						label="Phone"
						fullWidth
						autoComplete="tel"
						variant="standard"
						InputProps={{ "data-cy": "customer-phone" } as InputProps}
						FormHelperTextProps={
							{ "data-cy": "customer-phone-error" } as FormHelperTextProps
						}
						error={Boolean(form.formState.errors.phone)}
						helperText={form.formState.errors.phone?.message}
					/>
				</Grid>
				<Grid item xs={12} sm={6}></Grid>
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
