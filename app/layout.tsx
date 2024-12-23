import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar.tsx";
import LoginModal from "./components/modals/LoginModal.tsx";
import SignupModal from "./components/modals/SignupModal.tsx";
import ForgetModal from "./components/modals/ForgetModal.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeHeaven",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />

        {/* Todo el paginado */}
        <div>
          {children}
        </div>

        <LoginModal />
        <SignupModal />
        <ForgetModal />
      </body>
    </html>
  );
}