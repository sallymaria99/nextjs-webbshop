import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React from "react";

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface ToastProps {
	open: boolean;
	message: string;
	onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ open, message, onClose }) => {
	return (
		<Snackbar
			open={open}
			autoHideDuration={3000}
			onClose={onClose}
			data-cy="added-to-cart-toast"
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
		>
			<div>
				<Alert onClose={onClose} severity="success">
					{message}
				</Alert>
			</div>
		</Snackbar>
	);
};

export default Toast;
