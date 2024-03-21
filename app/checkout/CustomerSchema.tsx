import { z } from "zod";

export const CustomerSchema = z.object({
	customerName: z.string({ required_error: "Firstname is obligatory" }).min(3),
	email: z
		.string()
		.email({ message: "Please enter a valid email adress" })
		.min(5),
	address: z
		.string()
		.max(40, { message: "The post can be a maximum of 40 characters long" })
		.min(10),
	city: z
		.string()
		.max(28, { message: "The City can be a maximum of 28 characters long" }),
	zipcode: z.string({ required_error: "Zip code is obligatory" }),
	id: z.string(),
	country: z.string({ required_error: "Country is obligatory" }),
	phone: z.string({ required_error: "Phone is obligatory" }),
});

export type Customer = z.infer<typeof CustomerSchema>;
