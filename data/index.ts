/**
 * Beskriver en produkt som ska säljas på sidan.
 * OBS: Kan utökas men inte ändras pga cypress.
 *
 **/

import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string({ required_error: "Id is obligatory" }),
  title: z.string({ required_error: "Title is obligatory" }).min(10),
  description: z
    .string({ required_error: "Description is obligatory" })
    .min(10),
  image: z.string(),
  price: z.coerce.number({ required_error: "Price is obligatory" }),
});

export type Product = z.infer<typeof ProductSchema>;

export interface CartItem extends Product {
  quantity: number;
}

/* Lägg till era produkter här */
// OBS DÖP EJ OM
export const products: Product[] = [
  {
    id: "1",
    image: "/productImages/ice_cube.png",
    title: "Ice cubes made by the man himself Mr Ice Cube",
    description:
      "Handcarved icecubes from Jukkasjärvi in Sweden. The perfect cube for a fresh glas of water, and also our cheepest cube. ",
    price: 25000,
   
  },
  {
    id: "2",
    image: "/productImages/ice2.png",
    title: "Magical ice in a crystal glass (glas not included)",
    description:
      "This is amazing have all the ice and godness with all is glory bla bla",
    price: 1000,
  },
  {
    id: "3",
    image: "/productImages/iceglass.png",
    title: "Ice cubes made by the man himself Mr Ice Cube",
    description:
      "Handcarved icecubes from Jukkasjärvi in Sweden. The perfect cube for a fresh glas of water, and also our cheepest cube. ",
    price: 30000,
  },
  {
    id: "4",
    image: "/productImages/iceglass.png",
    title: "Detta är en till produkt",
    description: "Handgjorda ngt från ngt wow asfina blablabla ",
    price: 30000,
  },
  {
    id: "5",
    image: "/productImages/iceglass.png",
    title: "Detta är den sista produkten",
    description: "Detta är en grym produkt med massa extra finesser. ",
    price: 30000,
  },
];
