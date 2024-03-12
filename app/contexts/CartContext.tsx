"use client";
import { CartItem, Product } from "@/data";
import { PropsWithChildren, createContext, useContext, useState } from "react";

// Contexten
interface CartContextData {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

// Provider componenten
function CartProvider({ children }: PropsWithChildren<{}>) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingProductIndex = currentCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex >= 0) {
        const updatedCart = [...currentCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
        return updatedCart;
      } else {
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });

    // hantera logik för att lägga till en produkt i varukorgen
    // Kolla om produkten redan finns i varukorgen? quantity++???
  };

  const removeFromCart = (productId: string) => {
    setCart((currentCart) => currentCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Kosumerings hook
export const useCart = () => useContext(CartContext);
export default CartProvider;
