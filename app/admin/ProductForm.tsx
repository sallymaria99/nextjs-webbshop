"use client";
import { Product } from "@/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@mui/material";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useProducts } from "../contexts/ProductContext";
import { AdminScheme, Post } from "./AdminScheme";

interface ProductFormProps {
  product?: Product;
}

const ProductForm: React.FC<ProductFormProps> = ({ product }) => {
  const {
    register,

    formState: { errors },
    reset,
  } = useForm<Post>({
    resolver: zodResolver(AdminScheme),
  });

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
      reset(product);
    }
  }, [product, reset]);

  const onSubmit = (data: Post) => {
    if (product) {
      editProduct(formData);
    } else {
      addProduct({ ...formData, id: nanoid() });
    }
  };

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
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        margin="normal"
        label="Product Title"
        value={formData.title}
        {...register("title")}
        error={Boolean(errors.title)}
        helperText={errors.title ? errors.title.message : ""}
        onChange={handleChange}
      />
      {errors && <span className="error-message">{errors.title?.message}</span>}
      <TextField
        margin="normal"
        label="Description"
        value={formData.description}
        {...register("description")}
        error={Boolean(errors.description)}
        helperText={errors.description ? errors.description.message : ""}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        label="Image URL"
        value={formData.image}
        {...register("image")}
        error={Boolean(errors.title)}
        helperText={errors.image ? errors.image.message : ""}
        onChange={handleChange}
        //FormHelperTextProps={{"m"}}
      />
      <TextField
        margin="normal"
        label="Price"
        type="number"
        value={formData.price}
        {...register("price")}
        error={Boolean(errors.price)}
        helperText={errors.price ? errors.price.message : ""}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">
        {product ? "Update Product" : "Add Product"}
      </Button>
    </form>
  );
};

export default ProductForm;
