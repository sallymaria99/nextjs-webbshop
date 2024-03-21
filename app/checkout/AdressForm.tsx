"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  FormHelperTextProps,
  Paper,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import CopyRight from "../components/copyRight";
import { useCustomer } from "../contexts/CustomerContext";
import { Customer, CustomerSchema } from "./CustomerSchema";

export default function AddressForm() {
  const router = useRouter();
  const { setCustomer } = useCustomer();

  const form = useForm<Customer>({
    defaultValues: { id: nanoid() },
    resolver: zodResolver(CustomerSchema),
  });

  const save = (data: Customer) => {
    console.log(data);
    router.push("/confirmation");
    setCustomer(data);
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
      ></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 6, md: 14 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <form data-cy="customer-form" onSubmit={form.handleSubmit(save)}>
            <Typography variant="h6" gutterBottom textAlign={"center"}>
              Shipping address
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  {...form.register("customerName")}
                  label="Customer name *"
                  fullWidth
                  autoComplete="name"
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
                  label="Email *"
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
									label="Address *"
									fullWidth
									autoComplete="street-address"
									variant="standard"
									inputProps={{ "data-cy": "customer-address" }}
									FormHelperTextProps={
										{
											"data-cy": "customer-address-error",
										} as FormHelperTextProps
									}
									error={Boolean(form.formState.errors.address)}
									helperText={form.formState.errors.address?.message}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									{...form.register("city")}
									label="City *"
									fullWidth
									autoComplete="address-level2"
									variant="standard"
									inputProps={{ "data-cy": "customer-city" }}
									FormHelperTextProps={
										{ "data-cy": "customer-city-error" } as FormHelperTextProps
									}
									error={Boolean(form.formState.errors.city)}
									helperText={form.formState.errors.city?.message}
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									{...form.register("zipcode")}
									name="zipcode"
									label="Zipcode *"
									fullWidth
									autoComplete="postal-code"
									variant="standard"
									inputProps={{ "data-cy": "customer-zipcode" }}
									FormHelperTextProps={
										{
											"data-cy": "customer-zipcode-error",
										} as FormHelperTextProps
									}
									error={Boolean(form.formState.errors.zipcode)}
									helperText={form.formState.errors.zipcode?.message}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									{...form.register("phone")}
									id="phone"
									name="phone"
									label="Phone *"
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


              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
      <CopyRight />
    </React.Fragment>
  );
}
