
import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
})

export const metadata: Metadata = {
  title: "Flippa Trading - AI Trading Revolution",
  description:
    "Join the most used AI-trading bot for FREE! Let AI trade while you sleep with zero effort with Flippa Trading.",
  keywords: "AI trading, automated trading, forex, cryptocurrency, passive income, Flippa Trading",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className={`${figtree.className} antialiased`}>{children}</body>
    </html>
  )
}
