import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cenius',
  description: 'AI Platform'
  // icons: {
  // icon: './public/favicon-32x32.png',
  // icon: 'https://drive.google.com/file/d/1xpnmkRQC3fdhj175emiTqzQcejc4fs-a/view?usp=sharing',
  // apple: './public/apple-touch-icon.png'
  // }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
