"use client";
import { useProducts } from "@/app/contexts/ProductContext";
import { Container } from "@mui/material";
import ProductForm from "../../ProductForm";

interface Props {
  params: { id: string };
}

export default function EditProductPage({ params }: Props) {
  const { products } = useProducts();
  const productToEdit = products.find((product) => product.id === params.id);
  return (
    <Container>
      <ProductForm product={productToEdit} />
    </Container>
  );
}
