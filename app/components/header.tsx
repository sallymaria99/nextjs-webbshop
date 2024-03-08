import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const imageLogo = "/IceLogo.svg";
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
            <Link href="/admin">
              <ManageAccountsIcon />
            </Link>
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src={imageLogo} width={70} height={70} alt="IceLogo" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
