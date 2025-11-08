import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Verity Labs - Custom AI Agent Development Services & Agentic AI Consultation",
  description: "Boost your business with custom AI agents and agentic AI services that automate tasks, enhance decisions, and drive growth. Start transforming today!",
  keywords: ["AI Agent Development", "Agentic AI", "Custom AI Solutions", "LLM Integration", "Machine Learning", "AI Consultation"],
  authors: [{ name: "Verity Labs" }],
  openGraph: {
    title: "Verity Labs - Custom AI Agent Development Services",
    description: "Empowering Innovation Through Advanced AI Solutions",
    url: "https://veritylabs.com",
    siteName: "Verity Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verity Labs - Custom AI Agent Development Services",
    description: "Empowering Innovation Through Advanced AI Solutions",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
