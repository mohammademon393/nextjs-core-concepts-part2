import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bhojonbilash | Taste the Tradition",
  description: "Bhojonbilash Restaurant - Taste the Tradition, Love the Flavor",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* Navbar */}
        <header className="flex items-center justify-between p-2 bg-gradient-to-r from-blue-100 to-blue-400 text-black">
          
          {/* Logo */}
          <Link href="/">
            <img
              src="/logo2.png"
              alt="Bhojonbilash Restaurant Logo"
              className="h-20 w-32 object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex gap-6 font-medium text-white">
            <Link
              href="/foods"
              className="hover:text-orange-700 transition duration-300"
            >
              Foods
            </Link>

            <Link
              href="/reviews"
              className="hover:text-orange-700 transition duration-300"
            >
              Reviews
            </Link>
          </nav>

        </header>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}

