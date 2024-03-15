"use client";
import { Button, IconButton, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useProducts } from "../contexts/ProductContext";
import MultiActionAreaCard from "../components/productCard";
import AdminDelete from "../components/adminDelete";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AdminPage() {
  const { products } = useProducts();
  return (
    <Box component="main" data-cy="product">
      <IconButton component={Link} href="/admin/overview">
        <AddCircleOutlineIcon />
      </IconButton>

      <Box sx={{ flexGrow: 1 }}>
        {products.map((product) => (
          <Grid key={product.id} data-cy="product-id" item xs={8}>
            <Item>
              <Image
                src={product.image}
                width={100}
                height={100}
                alt={product.title}
              />
              <p>{product.description}</p>
              <AdminDelete id={product.id} />
            </Item>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}

/**Designen på denna sida är valfri men skall utgå ifrån designsystemet ni använder er av. Det skall finnas en knapp på startsidan som tar användaren till adminsidan. På adminsidan skall ni lista alla produkter samt ge användaren möjlighet att ta bort, lägga till eller ändra samtliga produkter (CRUD). Om ni väljer att ha en separat sida, modal eller accordion för ändring/tilläggning av en produkt är valfritt men flödet ska vara routat. Samtliga produkter skall vara sparade i localstorage, detta betyder att om localstorage är tomt vid inladdning av sidan behöver samtliga fördefinierade produkter sparas till localstorage. URL används för bilder så det enkelt kan sparas i localstorage.

Produktlistan måste döpas till `products` i localStorage. */
