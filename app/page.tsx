"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import MultiActionAreaCard from "./components/productCard";
import { useProducts } from "./contexts/ProductContext";

function Home() {
  const { products } = useProducts();
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        maxWidth: "100vw",
        minHeight: "100vh",
        backgroundImage: `url("/backgroundHome.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "5rem",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: 4,
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              width: "100%",
              maxWidth: "700px",
              padding: "20px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              boxSizing: "border-box",
              marginInline: "auto",
            }}
          >
            <Image
              src="/createice.png"
              alt="createice"
              width={150}
              height={100}
            />
            <Typography padding="2px">
              Experience the pinnacle of luxury ice at Luxice. Crafted in
              Jukkasjärvi, Sweden since 2002, our exclusive collection defines
              excellence in every chill. Elevate your moments with only the best
              – discover Luxice.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={4} style={{}}>
        {products.map((product) => (
          <Grid
            key={product.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
            data-cy="product"
            style={{ display: "flex", alignItems: "stretch" }}
          >
            <MultiActionAreaCard
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default Home;
