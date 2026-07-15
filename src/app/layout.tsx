import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import WhatsAppFloat from '@/components/ui/shared/WhatsAppFloat'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Tofeb Academy — Building Tomorrow\'s Entrepreneurs',
  description:
    'Tofeb Academy equips aspiring entrepreneurs with practical business education across Food, Fashion, Real Estate and Financial Literacy.',
  keywords: ['business academy', 'entrepreneurship', 'Nigeria', 'Tofeb'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="font-inter bg-white text-gray-900 antialiased">
        <main>{children}</main>
        <WhatsAppFloat />
      </body>
    </html>
  )
}