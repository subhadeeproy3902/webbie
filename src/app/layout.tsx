import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webbie",
  description: "Talk to any website not fully reading it XD",
  openGraph: {
    type: 'website',
    images: [
      {
        url: 'https://i.postimg.cc/mrhyRnt9/730-1x-shots-so.webp',
        width: 1000,
        height: 600,
      },
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
      <body className={cn(inter.className, "min-h-screen antialiased")}>
          <main className="h-screen dark text-foreground bg-background">
            {children}
          </main>
      </body>
    </html>
  );
}
