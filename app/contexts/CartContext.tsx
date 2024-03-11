import { CartItem, Product } from "@/data";
import { PropsWithChildren, createContext, useContext, useState } from "react";

// Contexten
interface CartContextData {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  // RemoveFromCart
  // Clear
}

const CartContext = createContext({} as CartContextData);

// Provider componenten
function CartProvider(props: PropsWithChildren) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    // hantera logik för att lägga till en produkt i varukorgen
    // Kolla om produkten redan finns i varukorgen? quantity++???
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

// Kosumerings hook
export const useCart = () => useContext(CartContext);
export default CartProvider;
