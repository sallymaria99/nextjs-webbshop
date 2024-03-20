import AddressForm from "./AdressForm";
import CartSummary from "./CartSummary";

function CheckoutPage() {
	return (
		<main>
			<CartSummary />
			<span>
				<AddressForm />
			</span>
		</main>
	);
}

export default CheckoutPage;
