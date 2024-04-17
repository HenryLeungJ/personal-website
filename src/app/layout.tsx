import type { Metadata } from "next";
import Header from "@/components/header"
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
      <body className="flex flex-col content-center h-screen">
        <Header />
        {children}
        </body>
    </html>
  );
}
