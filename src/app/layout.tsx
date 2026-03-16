import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  metadataBase: new URL("https://gaffer.bot"),
  title: "The Gaffer - Football Intelligence AI",
  description: "The smartest footballing brain on the internet. 11-factor prediction model. 19 leagues. Real-time injury intelligence. Built for the 2026 World Cup.",
  openGraph: {
    title: "The Gaffer - Football Intelligence AI",
    description: "The smartest footballing brain on the internet. Built for the 2026 World Cup.",
    images: ["/gaffer-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased">
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-[#1e1e1e] py-8 mt-20">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm text-zinc-500">
            <p>⚽ The Gaffer - Football Intelligence AI</p>
            <p className="mt-1">Built for the 2026 World Cup</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
