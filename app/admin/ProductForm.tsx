"use client";
import { Product, ProductSchema, products } from "@/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, FormHelperTextProps, TextField } from "@mui/material";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import {
  PRODUCTS_LOCAL_STORAGE_KEY,
  useProducts,
} from "../contexts/ProductContext";
import { useRouter } from "next/navigation";

interface ProductFormProps {
  product?: Product;
}

const ProductForm: React.FC<ProductFormProps> = ({ product }) => {
  const router = useRouter();
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
    localStorage.setItem(PRODUCTS_LOCAL_STORAGE_KEY, JSON.stringify(products));
    router.push("/admin");
  };

  console.log(getValues());

  return (
    <main>
      <form
        onSubmit={handleSubmit(onSubmit)}
        data-cy="product-form"
        style={{ display: "flex", flexDirection: "column", padding: "3rem" }}
      >
        <TextField
          type="text"
          label="Product Title"
          placeholder="Title"
          {...register("title")}
          error={Boolean(errors.title)}
          helperText={errors.title?.message}
          sx={{ margin: "10px" }}
          inputProps={{ "data-cy": "product-title" }}
          FormHelperTextProps={
            { "data-cy": "product-title-error" } as FormHelperTextProps
          }
        />

        <TextField
          type="text"
          label="Description"
          placeholder="Description"
          {...register("description")}
          error={Boolean(errors.description)}
          helperText={errors.description?.message}
          style={{ margin: "10px" }}
          inputProps={{ "data-cy": "product-description" }}
          FormHelperTextProps={
            { "data-cy": "product-description-error" } as FormHelperTextProps
          }
        />

        <TextField
          type="text"
          label="ImageURL"
          placeholder="Image URL"
          {...register("image")}
          error={Boolean(errors.image)}
          helperText={errors.image?.message}
          style={{ margin: "10px" }}
          inputProps={{ "data-cy": "product-image" }}
          FormHelperTextProps={
            { "data-cy": "product-image-error" } as FormHelperTextProps
          }
        />

        <TextField
          type="number"
          label="Price"
          placeholder="Price"
          {...register("price")}
          error={Boolean(errors.image)}
          helperText={errors.image?.message}
          style={{ margin: "10px" }}
          inputProps={{ "data-cy": "product-price" }}
          FormHelperTextProps={
            { "data-cy": "product-price-error" } as FormHelperTextProps
          }
        />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button type="submit" variant="contained">
            {product ? "Update Product" : "Add Product"}
          </Button>
          <Button type="button" variant="contained">
            Go Back
          </Button>
        </div>
      </form>
    </main>
  );
};

export default ProductForm;
