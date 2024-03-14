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
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart, isLoaded]);

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const exists = currentCart.some((item) => item.id === product.id);
      if (exists) {
        return currentCart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });

    // hantera logik för att lägga till en produkt i varukorgen
    // Kolla om produkten redan finns i varukorgen? quantity++???
  };

  const removeFromCart = (productId: string) => {
    setCart((currentCart) => {
      const exists = currentCart.some((item) => item.id === productId);
      if (exists) {
        return currentCart.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      } else {
        return currentCart.filter((item) => item.quantity > 0);
      }
    });
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
