import AddToCartButton from "@/app/components/addToCartButton";
import { Product, products } from "@/data";
import { Typography } from "@mui/material";
import Image from "next/image";

type PageProps = { params: { productId: string } };

function ProductPage({ params }: PageProps) {
  const productId = params.productId;
  const selectedProduct = products.find(
    (product: Product) => product.id === productId
  );

  if (!selectedProduct) {
    return <h1>Product not found</h1>;
  }

  return (
    <main>
      <Typography variant="h1" data-cy="product-title">
        {selectedProduct.title}
      </Typography>
      <Image
        src={selectedProduct.image}
        alt={selectedProduct.title}
        width={200}
        height={200}
      />
      <Typography variant="body1" data-cy="product-description">
        {selectedProduct.description}
      </Typography>
      <Typography variant="h3" data-cy="product-price">
        {selectedProduct.price}
      </Typography>
      <AddToCartButton product={selectedProduct} />
    </main>
  );
}
export default ProductPage;
