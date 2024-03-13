/* import { z } from "zod";

export const PostSchema = z.object({
    firstName:z.string()(1,{message: "Firstname is obligatory"}),
    lastName:z.string()(1,{message: "Lastname is obligatory"}),
	email: z.string().email({ message: "Please enter a valid email adress" }),
	adress1: z.string().max(60, { message: "The post can be a maximum of 60 characters long" }),
    city:z.string()(1,{message: "City is obligatory"}),
    zip:z.string()(4,{message: "Zipcode is obligatory"}),
	id: z.string(),
    country:z.string()(1,{message: "Country is obligatory"})

   
});

export type Post = z.infer<typeof PostSchema>;

 */
