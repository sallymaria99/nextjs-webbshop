"use client";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Link from "next/link";
import CustomizedBadges from "./cartButton";

function Footer() {
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
          href="/"
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

        <BottomNavigationAction
          data-cy="cart-link"
          component={Link}
          href="/checkout"
          label="Cart"
          icon={<CustomizedBadges />} //cartbutton
        />
      </BottomNavigation>
    </>
  );
}

export default Footer;
