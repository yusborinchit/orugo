import "~/styles/globals.css";

import { type Metadata } from "next";
import { Oswald } from "next/font/google";

const font = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Catalogo de Orugo | Inicio",
  description: "Un catalogo de los productos de Orugo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${font.className} antialiased`}>
        <div className="mx-auto max-w-screen-sm px-4">{children}</div>
      </body>
    </html>
  );
}
