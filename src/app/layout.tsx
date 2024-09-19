import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomProvider from "./CustomProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomProvider>
          <NavBar />
          {children}
          <Footer />
        </CustomProvider>
      </body>
    </html>
  );
}
