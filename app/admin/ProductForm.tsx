"use client";
import { Product, ProductSchema } from "@/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@mui/material";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useProducts } from "../contexts/ProductContext";

interface ProductFormProps {
  product?: Product;
}

const ProductForm: React.FC<ProductFormProps> = ({ product }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<Product>({
    resolver: zodResolver(ProductSchema),
    defaultValues: product || { id: nanoid() },
  });

  const { addProduct, editProduct } = useProducts();

  const onSubmit = (data: Product) => {
    if (product) {
      editProduct(data);
    } else {
      addProduct({ ...data, id: nanoid() });
    }
  };

  console.log(getValues());

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)} data-cy="product-form">
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className={errors.title ? "error" : ""}
          data-cy="product-title"
        />
        {errors.title && (
          <span className="error-text">{errors.title.message}</span>
        )}
        <input
          type="text"
          placeholder="Description"
          {...register("description")}
          className={errors.description ? "error" : ""}
          data-cy="product-description"
        />
        {errors.image && (
          <span className="error-text">{errors.description?.message}</span>
        )}
        <input
          type="text"
          placeholder="Image URL"
          {...register("image")}
          className={errors.image ? "error" : ""}
          data-cy="product-image"
          //FormHelperTextProps={{"m"}}
        />
        {errors.image && (
          <span className="error-text">{errors.image.message}</span>
        )}
        <input
          type="number"
          placeholder="Price"
          {...register("price")}
          className={errors.price ? "error" : ""}
          data-cy="product-price"
        />
        {errors.price && (
          <span className="error-text">{errors.price.message}</span>
        )}
        <Button type="submit" variant="contained">
          {product ? "Update Product" : "Add Product"}
        </Button>
        <Button variant="contained" href="/admin">
          Go Back
        </Button>
      </form>
    </main>
  );
};

export default ProductForm;
