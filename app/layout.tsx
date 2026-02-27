import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteConfig } from "@/lib/data"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="noise grid-overlay font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
