import { z } from "zod";

export const AdminScheme = z.object({
  title: z.string({ required_error: "Title is obligatory" }),
  description: z.string({ required_error: "Description is obligatory" }),
  image: z.string({ required_error: "Image-URL is obligatory" }),
  price: z.number({ required_error: "Price is obligatory" }),
});

export type Post = z.infer<typeof AdminScheme>;
