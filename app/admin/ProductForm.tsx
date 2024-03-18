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

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        margin="normal"
        label="Product Title"
        {...register("title")}
        error={Boolean(errors.title)}
        helperText={errors.title?.message}
      />
      <TextField
        margin="normal"
        label="Description"
        {...register("description")}
        error={Boolean(errors.description)}
        helperText={errors.description?.message}
      />
      <TextField
        margin="normal"
        label="Image URL"
        {...register("image")}
        error={Boolean(errors.image)}
        helperText={errors.image?.message}

        //FormHelperTextProps={{"m"}}
      />
      <TextField
        margin="normal"
        label="Price"
        type="number"
        {...register("price")}
        error={Boolean(errors.price)}
        helperText={errors.price?.message}
      />
      <Button type="submit" variant="contained">
        {product ? "Update Product" : "Add Product"}
      </Button>
    </form>
  );
};

export default ProductForm;
