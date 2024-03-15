"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

import { Product, products as initialProducts } from "@/data";

interface ProductsContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  addProduct: (newProduct: Product) => void;
  editProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
}

interface ProductsProviderProps {
  children: React.ReactNode;
}

const defaultState: ProductsContextType = {
  products: [],
  setProducts: () => {},
  addProduct: () => {},
  editProduct: () => {},
  removeProduct: () => {},
};

const ProductsContext = createContext<ProductsContextType>(defaultState);

const PRODUCTS_LOCAL_STORAGE_KEY = "products";

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

  const addProduct = (newProduct: Product) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, newProduct];
      /*  localStorage.setItem(
        PRODUCTS_LOCAL_STORAGE_KEY,
        JSON.stringify(updatedProducts)
      ); */
      return updatedProducts;
    });
  };

  const removeProduct = (productId: string) => {
    setProducts((currentProduct: Product[]) => {
      return currentProduct.filter((products) => products.id !== productId);
    });
  };
  const editProduct = (productId: string) => {
    return console.log("hej");
  };

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, addProduct, editProduct, removeProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
export default ProductsProvider;
