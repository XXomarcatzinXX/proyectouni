import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Universidades de cancun",
  description: "Aplicacion hecha por catzin",

};

export default function Layout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
