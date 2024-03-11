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
      <BottomNavigationAction
        component={Link}
        href="/checkout"
        label="Cart"
        icon={<ShoppingCartIcon sx={{ color: "#4D559D" }} />}
      />
    </BottomNavigation>
  );
}

export default Footer;
