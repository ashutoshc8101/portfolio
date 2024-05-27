import { Inter } from "next/font/google";
import "./globals.css";

export { metadata } from "../portfolio";

const inter = Inter({ subsets: ["latin"] });

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from "./Navbar";
config.autoAddCss = false

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
