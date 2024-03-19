import { CardActionArea, CardActions, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddToCartButton from "./addToCartButton";

interface ProductCardProps {
	id: string;
	image: string;
	title: string;
	description: string;
	price: number;
}

export default function MultiActionAreaCard(props: ProductCardProps) {
	const product = {
		id: props.id,
		image: props.image,
		title: props.title,
		description: props.description,
		price: props.price,
	};

	return (
		<Card sx={{ maxWidth: 200, mx: "auto" }}>
			<CardActionArea
				LinkComponent={Link}
				href={`/product/${product.id}`}
				data-cy="product-id"
				sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
			>
				<CardMedia
					component="img"
					height="100%"
					width="auto"
					image={props.image}
					alt="green iguana"
					sx={{ maxWidth: "100%" }}
				/>
				<CardContent sx={{ textAlign: "center" }}>
					<Typography gutterBottom variant="h5" component="div">
						{props.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						$ {props.price}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions sx={{ justifyContent: "center" }}>
				<AddToCartButton product={product} />
			</CardActions>
		</Card>
	);
}
