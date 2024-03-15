"use client";
import { Container } from "@mui/material";
import ProductForm from "../ProductForm";
import { useProducts } from "@/app/contexts/ProductContext";

interface IdProps {
  id: string;
}

export default function OverviewPage(props: IdProps) {
  const { products } = useProducts();
  const productId = props.id;
  const productToEdit = products.find((product) => product.id === productId);
  return (
    <Container>
      {productToEdit ? (
        <ProductForm product={productToEdit} />
      ) : (
        <ProductForm />
      )}
    </Container>
  );
}
