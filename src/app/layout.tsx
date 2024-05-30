import type { Metadata } from "next";
import Header from "@/components/headeralt"
import "./globals.css";


export const metadata: Metadata = {
  title: "Henry Leung",
  description: "Henry Leung's Portfolio Website",
  icons: {
    icon: "/star.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="w-screen h-screen overflow-hidden">
        <Header />
        {children}
        </body>
    </html>
  );
}
