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
		.min(4, { message: "The City can be a maximum of 28 characters long" })
		.max(28, { message: "The City can be a maximum of 28 characters long" }),

	zipcode: z.string().min(5, { message: "Zip code is obligatory" }).max(5),
	id: z.string(),
	phone: z
		.string()
		.min(7, { message: "Phone number is too short" })
		.max(15, { message: "Phone number is too long" })
		.optional(),
});

export type Customer = z.infer<typeof CustomerSchema>;
