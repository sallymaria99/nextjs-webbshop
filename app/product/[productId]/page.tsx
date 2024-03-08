import { products, Product } from "@/data";
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
    <div>
      <h1> {selectedProduct.title}</h1>
      <Image
        src={selectedProduct.image}
        alt={selectedProduct.title}
        width={200}
        height={200}
      />
      <p>{selectedProduct.description}</p>
      <h3>{selectedProduct.price}</h3>
    </div>
  );
}
export default ProductPage;
