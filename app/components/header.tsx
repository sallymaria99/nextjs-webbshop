import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

/* const imageLogo = "../assets/productImages/IceLogo.svg"; */

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ background: "linear-gradient(to right, #c0c0c0, #f0f0f0)" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src={imageLogo} width={40} height={40} alt="IceLogo" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
