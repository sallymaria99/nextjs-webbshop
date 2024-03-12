"use client";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";

function Footer() {
  const { cart } = useCart();
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const itemCount: any = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalItems(itemCount);
  }, [cart]);
  return (
    <>
      <BottomNavigation
        component="footer"
        sx={{
          width: "100%",
          position: "fixed",
          left: 0,
          bottom: 0,
          margin: 0,
          padding: 0,
          background: "linear-gradient(to right, #c0c0c0, #f0f0f0)",
        }}
      >
        <BottomNavigationAction
          component={Link}
          href="/admin"
          label="Search"
          icon={
            <SearchIcon
              sx={{
                color: "#4D559D",
              }}
            />
          }
        />
        <BottomNavigationAction
          component={Link}
          href="/"
          label="Home"
          icon={<HomeIcon sx={{ color: "#4D559D" }} />}
        />
        <Badge
          badgeContent={totalItems}
          sx={{
            /* position: "absolute",
            width: 5,
            height: 5, */

            ".MuiBadge-badge": {
              right: -3,
              top: 13,
            },
          }}
        >
          <BottomNavigationAction
            component={Link}
            href="/checkout"
            label="Cart"
            icon={<ShoppingCartIcon sx={{ color: "#4D559D" }} />}
          />
        </Badge>
      </BottomNavigation>
    </>
  );
}

export default Footer;
