import type { Metadata } from "next";
import { Jomhuria } from "next/font/google";
import "./globals.css";

const jomhuriaInstance = Jomhuria({
  weight: "400",
  subsets: ["latin"],
});

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
      <body className={jomhuriaInstance.className}>{children}</body>
    </html>
  );
}
