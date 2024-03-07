import {
  BottomNavigationAction,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "./components/header";
import { LayoutProps } from "./types";
import Footer from "./components/footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const inter = Inter({ subsets: ["latin"] });

/* Beskriv din hemsida för sökmotorerna */
export const metadata: Metadata = {
  title: "Webbshop",
  description: "Dina favoritprodukter online till en bra pris...",
};

/* const theme = createTheme({
  palette: { primary: { main: "green" } },
}); */

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          {/* <ThemeProvider theme={theme}> */}
          <Header />
          <Link href="/">
            <h1>Ice</h1>
          </Link>

          {children}
          <Footer />

          {/*   </ThemeProvider> */}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
