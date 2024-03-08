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
        sx={{
          background: "linear-gradient(to right, #c0c0c0, #f0f0f0)",
          // alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            padding: 0,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <Link href="/admin">
                <ManageAccountsIcon sx={{ color: "#ffff" }} />
              </Link>
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              // padding: 0,
              // margin: 0,
              cursor: "pointer",
            }}
          >
            <Link href="/">
              <Image
                src={imageLogo}
                width={130}
                height={60}
                alt="IceLogo"
                priority
              />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
