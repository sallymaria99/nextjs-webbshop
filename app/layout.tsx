import { BottomNavigationAction, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/header";
import { LayoutProps } from "./types";
import Footer from "./components/footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import themes from "./themes/theme";

/* Beskriv din hemsida för sökmotorerna */
export const metadata: Metadata = {
  title: "Webbshop",
  description: "Dina favoritprodukter online till en bra pris...",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={themes}>
            <Header />
            <Link href="/">
              <br />
              <br />
              <br />
            </Link>

            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
