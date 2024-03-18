"use client";
import { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductContext";
import { products, Product } from "@/data";
import { Box, Button, TextField } from "@mui/material";

interface ProductFormProps {
  product?: Product;
}

const ProductForm: React.FC<ProductFormProps> = ({ product }) => {
  const { addProduct, editProduct } = useProducts();
  const [formData, setFormData] = useState<Product>({
    id: product?.id || "",
    title: product?.title || "",
    description: product?.description || "",
    image: product?.image || "",
    price: product?.price || 0,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        id: product.id,
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
      });
    }
  }, [product]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product) {
      editProduct(formData);
    } else {
      addProduct(formData);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        name="title"
        label="Product Title"
        value={formData.title}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        name="description"
        label="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        name="image"
        label="Image URL"
        value={formData.image}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        name="price"
        label="Price"
        type="number"
        value={formData.price}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">
        {product ? "Update Product" : "Add Product"}
      </Button>
    </Box>
  );
};

export default ProductForm;
