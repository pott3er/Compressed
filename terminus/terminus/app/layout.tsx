import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terminus — Digital Inheritance Protocol",
  description: "A decentralized digital inheritance protocol where immutable cryptography meets human empathy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
