import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/component/navbar/Navbar'
import Footer from '@/component/footer/Footer'
import { inter } from '../../public/fonts/inter'
import { nunito } from '../../public/fonts/inter'
import { Suspense } from 'react'
import Loading from './loading'

export const metadata: Metadata = {
     title: {
          default: 'A2 Technologies',
          template: '%s | A2 Technologies',
     },
     description: 'Pioneering Engineering Solutions for a Greener Tomorrow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
          <html lang='en' className={`${inter.variable} ${nunito.variable}`}>
               <head>
                    <link rel='icon' href='/favicon.ico' />
               </head>
               <body>
                    <Suspense fallback={<Loading />}>
                         <Navbar />
                         {children}
                         <Footer />
                    </Suspense>
               </body>
          </html>
     )
}
