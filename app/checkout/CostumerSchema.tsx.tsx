import { z } from "zod";

export const PostSchema = z.object({
	customerName: z.string({ required_error: "Firstname is obligatory" }),
	email: z.string().email({ message: "Please enter a valid email adress" }),
	address: z
		.string()
		.max(40, { message: "The post can be a maximum of 40 characters long" }),
	city: z.string({ required_error: "City is obligatory" }),
	zipcode: z.string({ required_error: "Zip code is obligatory" }),
	id: z.string(),
	country: z.string({ required_error: "Country is obligatory" }),
	phone: z.string({ required_error: "Phone is obligatory" }),
});

export type Post = z.infer<typeof PostSchema>;
