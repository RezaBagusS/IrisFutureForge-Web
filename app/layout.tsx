import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iris Future Forge - WEB",
  description:
    "IRIS Future Forge, sebuah perusahaan pendidikan inovatif, membedakan dirinya dengan platform bimbingan online, AsahOtak, yang berfokus pada persiapan ujian UTBK-SNBT.",
  generator: "Next.js",
  applicationName: "Iris Future Forge - WEB",
  keywords: [
    "iris future forge",
    "iris project",
    "IRIS",
    "UTBK-SNBT",
    "Scholarship",
    "AsahOtak",
  ],
  metadataBase: new URL("https://iris-future-forge-web.vercel.app/"),
  creator: "Reza Bagus Saputra",
  alternates: {
    canonical: "https://iris-future-forge-web.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
