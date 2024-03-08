"use client";
import Link from "next/link";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { BottomNavigation } from "@mui/material";

function Footer() {
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: "0",
        margin: "0",
        padding: "0",
        background: "linear-gradient(to right, #c0c0c0, #f0f0f0)",
      }}
    >
      <Link href="/admin" passHref>
        <BottomNavigationAction
          label="Search"
          icon={
            <SearchIcon
              sx={{
                color: "#4D559D",
              }}
            />
          }
        />
      </Link>
      <Link href="/" passHref>
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon sx={{ color: "#4D559D" }} />}
        />
      </Link>
      <Link href="/checkout" passHref>
        <BottomNavigationAction
          label="Cart"
          icon={<ShoppingCartIcon sx={{ color: "#4D559D" }} />}
        />
      </Link>
    </BottomNavigation>
  );
}

export default Footer;
