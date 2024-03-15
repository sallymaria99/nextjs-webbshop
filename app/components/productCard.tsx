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
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        LinkComponent={Link}
        href={`/product/${product.id}`}
        data-cy="product-id"
      >
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <AddToCartButton product={product} />
      </CardActions>
    </Card>
  );
}
