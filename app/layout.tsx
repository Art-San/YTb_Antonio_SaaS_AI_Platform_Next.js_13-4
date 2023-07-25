import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs' // https://clerk.com/docs/nextjs/get-started-with-nextjs
// https://clerk.com/docs/nextjs/get-started-with-nextjs#:~:text=CLERK_SECRET_KEY%3Dsk_test_%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2%E2%80%A2-,Mount%20ClerkProvider,-Update%20your%20root

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
