import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";

export { metadata } from "../portfolio";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Footer />
      </body>
    </html>
  );
}
