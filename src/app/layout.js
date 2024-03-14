import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Universidades de cancun",
  description: "Aplicacion hecha por catzin",

};

export default function Layout({ children }) {
  return (
    <html lang="en" className="bg-#0c0b0b">
      <Navbar>
        {children}
      </Navbar>
      <body className={inter.className}>{children}

      </body>
    </html>
  );
}
