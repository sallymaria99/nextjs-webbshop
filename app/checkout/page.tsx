import CartSummary from "./CartSummary";
import Checkout from "./Checkout";

function CheckoutPage() {
	return (
		<main>
			<CartSummary />
			<span>
				<Checkout />
			</span>
		</main>
	);
}

export default CheckoutPage;
