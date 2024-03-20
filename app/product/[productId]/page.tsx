import AddToCartButton from "@/app/components/addToCartButton";
import { Product, products } from "@/data";
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
			<h1 data-cy="product-title"> {selectedProduct.title}</h1>
			<Image
				src={selectedProduct.image}
				alt={selectedProduct.title}
				width={200}
				height={200}
			/>
			<p data-cy="product-description">{selectedProduct.description}</p>
			<h3 data-cy="product-title">{selectedProduct.price}</h3>
			<AddToCartButton product={selectedProduct} />
		</div>
	);
}
export default ProductPage;
