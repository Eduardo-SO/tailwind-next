import { Header } from '@/components/Header'
import './globals.css'

import { Inter } from '@next/font/google'
import { HeroPattern } from '@/components/HeroPattern'
import { Sidebar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body className='bg-zinc-900'>
        <Sidebar />

        <div className='ml-80 relative h-screen'>
          <Header />
          <HeroPattern />
          
          <div className="py-24 max-w-4xl px-8 mx-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
