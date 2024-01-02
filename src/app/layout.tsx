import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'TuTiPet',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='flex flex-col justify-between w-full min-h-dvh font-main'>
          <Header/>
            <main className='flex justify-center'>
              {children}
            </main>
          <Footer/>
        </div>

      </body>
    </html>
  )
}
