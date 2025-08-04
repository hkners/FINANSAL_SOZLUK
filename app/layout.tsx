import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSubscription } from "@/components/newsletter-subscription"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Finansal Sözlük | Finans Terimlerini Öğrenin",
  description:
    "Finans ve ekonomi dünyasının terimlerini basit ve anlaşılır şekilde öğrenin. Gençler, yatırımcılar ve girişimciler için hazırlanmış kapsamlı rehber.",
  keywords: "finans, ekonomi, sözlük, yatırım, borsa, kripto para, bankacılık",
  authors: [{ name: "Finansal Sözlük" }],
  openGraph: {
    title: "Finansal Sözlük | Finans Terimlerini Öğrenin",
    description: "Finans ve ekonomi dünyasının terimlerini basit ve anlaşılır şekilde öğrenin.",
    type: "website",
    locale: "tr_TR",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <NewsletterSubscription />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
