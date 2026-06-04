import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Samyak Jain — Software & AI Developer",
  description:
    "Portfolio of Samyak Jain, a Software and AI Developer working across backend engineering, data platforms, and applied AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${GeistSans.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {try {const key = 'portfolio-theme'; const saved = localStorage.getItem(key); const theme = saved || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'); document.documentElement.dataset.theme = theme;} catch (_) { document.documentElement.dataset.theme = 'dark'; }})();`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
