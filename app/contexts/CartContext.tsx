"use client";
import { CartItem, Product } from "@/data";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Contexten
interface CartContextData {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CART_LOCAL_STORAGE_KEY = "cart";

// Provider componenten
function CartProvider({ children }: PropsWithChildren<{}>) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingProductIndex = currentCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...currentCart];
        updatedCart[existingProductIndex].quantity += 1;
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
      value={{ cart, setCart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Kosumerings hook

export const useCart = () => useContext(CartContext);
export default CartProvider;
