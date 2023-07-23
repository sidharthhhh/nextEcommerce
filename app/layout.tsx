import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google'
import { ModalProvider } from '@/providers/modal-provider';
// import prismadb from '@/lib/prismadb';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const store = prismadb.store.fin

  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider />
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
