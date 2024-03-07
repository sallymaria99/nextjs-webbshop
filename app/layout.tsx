import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "./components/header";
import { LayoutProps } from "./types";

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
        {/* <ThemeProvider theme={theme}> */}
        <Header />
        <Link href="/">
          <h1>Ice</h1>
        </Link>

        {children}
        <footer>
          <p>NAPS © 2024</p>
        </footer>
        {/*   </ThemeProvider> */}
      </body>
    </html>
  );
}
