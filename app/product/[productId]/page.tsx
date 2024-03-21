import AddToCartButton from "@/app/components/addToCartButton";
import { formatCurrency } from "@/app/utilities/fomatCurrency";
import { Product, products } from "@/data";
import { Box, Card, CardContent, Typography } from "@mui/material";
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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Card>
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" marginBottom={3} data-cy="product-title">
              {selectedProduct.title}
            </Typography>
            <Box marginBottom={2}>
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                width={270}
                height={270}
              />
            </Box>
            <Typography variant="body1" data-cy="product-description">
              {selectedProduct.description}
            </Typography>
            <Typography
              variant="h3"
              data-cy="product-price"
              style={{ fontSize: "20px", padding: "5px", marginBottom: "2px" }}
            >
              {formatCurrency(selectedProduct.price)}
            </Typography>
            <AddToCartButton product={selectedProduct} />
          </CardContent>
        </Card>
      </Box>
    </main>
  );
}
export default ProductPage;
