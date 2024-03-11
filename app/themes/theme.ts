"use client";
import { createTheme } from "@mui/material/styles";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const themes = createTheme({
  typography: {
    fontFamily: quicksand.style.fontFamily,
  },
});

export default themes;
