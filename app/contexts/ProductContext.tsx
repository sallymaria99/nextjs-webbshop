"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

import { Product, products as initialProducts } from "@/data";

interface ProductsContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

interface ProductsProviderProps {
  children: React.ReactNode;
}

const defaultState: ProductsContextType = {
  products: [],
  setProducts: () => {},
};

const ProductsContext = createContext<ProductsContextType>(defaultState);

const PRODUCTS_LOCAL_STORAGE_KEY = "products";

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = JSON.parse(
      localStorage.getItem(PRODUCTS_LOCAL_STORAGE_KEY) || "[]"
    );
    if (storedProducts.length > 0) {
      setProducts(storedProducts);
    } else {
      localStorage.setItem(
        PRODUCTS_LOCAL_STORAGE_KEY,
        JSON.stringify(initialProducts)
      );
      setProducts(initialProducts);
    }
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
