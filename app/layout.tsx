import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moru ai',
  description: 'Moru ai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("bg-secondary",inter.className)}>
          <ThemeProvider
           attribute='class' 
           defaultTheme='system' 
           enableSystem
          >
            {children}
            <Toaster />
          </ThemeProvider>
          </body>
      </html>
    </ClerkProvider>
  )
}
