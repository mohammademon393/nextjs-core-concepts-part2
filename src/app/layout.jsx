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
      <body className="min-h-full">
        {/* Navbar */}
        <header className=" bg-gradient-to-r from-orange-200 to-orange-400 ">
          <div className="max-w-[1280px] mx-auto flex items-center justify-between  text-black px-2 md:px-4">
            {/* Logo */}
            <Link href="/">
              <img
                src="/logo2.png"
                alt="Bhojonbilash Restaurant Logo"
                className="h-20 w-40 object-contain"
              />
            </Link>

            {/* Navigation */}
            <nav className="flex gap-6 font-medium text-white">
              <Link
                href="/foods"
                className="hover:text-blue-700 hover:underline transition duration-300"
              >
                Foods
              </Link>

              <Link
                href="/reviews"
                className="hover:text-blue-700 hover:underline transition duration-300"
              >
                Reviews
              </Link>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}

