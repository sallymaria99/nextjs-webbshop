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
    <BottomNavigation sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <Link href="/admin" passHref>
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </Link>
      <Link href="/" passHref>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      </Link>
      <Link href="/checkout" passHref>
        <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
      </Link>
    </BottomNavigation>
  );
}

export default Footer;
