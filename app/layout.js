import Nav from "@/components/Header/Nav";
import AuthForm from "@/components/AuthForm/AuthForm";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Booky",
  description: "Book your house",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
