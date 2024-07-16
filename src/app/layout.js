import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Layout/Footer/Footer";
import Navbar from "../components/Layout/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HD-Wallet",
  description: "HD Wallet App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
        <Navbar />
        {children}
        <Footer />
        </>
      </body>
    </html>
  );
}
