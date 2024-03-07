/**
 * Beskriver en produkt som ska säljas på sidan.
 * OBS: Kan utökas men inte ändras pga cypress.
 *
 **/
import { StaticImageData } from "next/image";
import iceCube from "../app/assets/productImages/ice_cube.png";
import iceGlass from "../app/assets/productImages/iceglass.png";
import ice2 from "../app/assets/productImages/ice2.png";
export interface Product {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

/* Lägg till era produkter här */
// OBS DÖP EJ OM
export const products: Product[] = [
  {
    id: "1",
    image: iceCube,
    title: "Ice cubes made by the man himself Mr Ice Cube",
    description:
      "Handcarved icecubes from Jukkasjärvi in Sweden. The perfect cube for a fresh glas of water, and also our cheepest cube. ",
    price: 25000,
  },
  {
    id: "2",
    image: iceGlass,
    title: "Magical ice in a crystal glass (glas not included)",
    description:
      "This is amazing have all the ice and godness with all is glory bla bla",
    price: 1000,
  },
  {
    id: "3",
    image: ice2,
    title: "Ice cubes made by the man himself Mr Ice Cube",
    description:
      "Handcarved icecubes from Jukkasjärvi in Sweden. The perfect cube for a fresh glas of water, and also our cheepest cube. ",
    price: 30000,
  },
];
