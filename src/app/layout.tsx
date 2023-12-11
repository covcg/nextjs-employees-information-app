import { Inter } from "next/font/google";
import "./globals.css";
import Icon from "@/components/icon/Icon";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className + " flex flex-col h-screen min-h-screen"}
      >
        <header className="flex items-center h-16 bg-white text-p-d2 dark:bg-p-d2 dark:text-p-l2 px-4 py-2">
          <nav className="flex">
            <div className="flex flex-grow items-center">
              <Link
                href="/"
                className="leading-none p-1 rounded-full transition-shadow hover:shadow-[inset_0_0_2rem_rgba(255,255,255,.25)] dark:hover:shadow-[inset_0_0_2rem_rgba(0,0,0,.25)]"
              >
                <Icon className="text-2xl">home</Icon>
              </Link>
              <span className="ml-2">Current Page</span>
            </div>
          </nav>
        </header>
        <main className="flex flex-grow overflow-y-auto items-center justify-center bg-white dark:bg-p-d2 text-p-d2 dark:text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
