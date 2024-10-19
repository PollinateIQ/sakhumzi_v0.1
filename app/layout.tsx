import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sakhumzi - Authentic South African Cuisine',
  description: 'Experience the taste of South Africa at Sakhumzi restaurants. Enjoy traditional dishes, warm hospitality, and a unique cultural experience across our locations in ZooLake, Phefeni, and Vilakazi.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}