import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "./components/footer";
import Header from "./components/header";
import themes from "./themes/theme";
import { LayoutProps } from "./types";

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
