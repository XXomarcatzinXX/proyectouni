import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Universidades de cancun",
  description: "Aplicacion hecha por catzin",

};

export default function Layout({ children }) {
  return (
    <html lang="en" className="bg-#0c0b0b">
      <body className={inter.className}>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
      </body>
    </html>
  );
}
