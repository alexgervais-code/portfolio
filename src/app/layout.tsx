import type { Metadata, Viewport } from "next";
import { Figtree, Space_Mono } from "next/font/google";
import { Agentation } from "agentation";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Alex Gervais Portfolio",
  description:
    "Product designer and maker that brings ideas to life through craft and play.",
  openGraph: {
    title: "Alex Gervais Portfolio",
    description:
      "Product designer and maker that brings ideas to life through craft and play.",
    type: "website",
    images: [
      {
        url: "/images/projects/share_image.png",
      },
    ],
  },
  other: {
    "theme-color": "#f7faff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${spaceMono.variable} h-full antialiased`}>
      <body className="min-h-full">
        {children}
        {process.env.NODE_ENV === "development" && <Agentation />}
        <Analytics />
      </body>
    </html>
  );
}
