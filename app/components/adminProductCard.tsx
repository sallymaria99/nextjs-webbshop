import { CardActionArea, CardActions, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AdminDelete from "./adminDelete";

interface AdminProductCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

export default function AdminProductCard(props: AdminProductCardProps) {
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
        href={`/admin/product/${product.id}`}
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
        <CardContent sx={{ textAlign: "center" }} data-cy="admin-edit-product">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            data-cy="product-title"
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            data-cy="product-price"
          >
            $ {props.price}
          </Typography>
          <Typography variant="body2" color="white" data-cy="product-id">
            {props.id}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center" }}>
        <AdminDelete id={product.id} />
      </CardActions>
    </Card>
  );
}
