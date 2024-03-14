import { z } from "zod";

export const PostSchema = z.object({
	firstName: z.string({ required_error: "Firstname is obligatory" }),
	lastName: z.string({ required_error: "Lastname is obligatory" }),
	email: z.string().email({ message: "Please enter a valid email adress" }),
	adress1: z
		.string()
		.max(60, { message: "The post can be a maximum of 60 characters long" }),
	city: z.string({ required_error: "City is obligatory" }),
	zip: z.string({ required_error: "Zipcode is obligatory" }),
	id: z.string(),
	country: z.string({ required_error: "Country is obligatory" }),
});

export type Post = z.infer<typeof PostSchema>;
