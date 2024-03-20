"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

import { Product, products as initialProducts } from "@/data";

interface ProductsContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  addProduct: (newProduct: Product) => void;
  editProduct: (updatedProduct: Product) => void;
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

export const PRODUCTS_LOCAL_STORAGE_KEY = "products";

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

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
      localStorage.setItem(
        PRODUCTS_LOCAL_STORAGE_KEY,
        JSON.stringify(updatedProducts)
      );
      return updatedProducts;
    });
  };

  const removeProduct = (productId: string) => {
    setProducts((currentProduct: Product[]) => {
      const updatedProducts = currentProduct.filter(
        (product) => product.id !== productId
      );
      localStorage.setItem(
        PRODUCTS_LOCAL_STORAGE_KEY,
        JSON.stringify(updatedProducts)
      );
      return updatedProducts;
    });
  };

  const editProduct = (updatedProduct: Product) => {
    setProducts((prevProducts) => {
      const otherProducts = prevProducts.filter(
        (product) => product.id !== updatedProduct.id
      );
      const newProducts = [...otherProducts, updatedProduct];
      localStorage.setItem(
        PRODUCTS_LOCAL_STORAGE_KEY,
        JSON.stringify(newProducts)
      );
      return newProducts;
    });
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
