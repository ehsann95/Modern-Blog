import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Modern Blog",
    template: "%s | Modern Blog",
  },
  description:
    "A modern blog built with Next.js featuring minimalist design, user experience insights, and design system guidance.",
  keywords: [
    "blog",
    "design",
    "UX",
    "typography",
    "minimalism",
    "design systems",
  ],
  authors: [{ name: "Modern Blog Team" }],
  creator: "Modern Blog Team",
  publisher: "Modern Blog",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
