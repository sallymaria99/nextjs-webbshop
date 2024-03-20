import { Link } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function Copyright() {
	//länken längst ner
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			sx={{ pb: 1 }}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Luxice
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}
