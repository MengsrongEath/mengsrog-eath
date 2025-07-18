import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "eath-mengsrong",
  description: "This is my personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
