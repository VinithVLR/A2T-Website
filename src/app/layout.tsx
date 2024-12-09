import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/component/navbar/Navbar'
import Footer from '@/component/footer/Footer'
// import { Inter, DM_Sans } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
// const dmSans = DM_Sans({ subsets: ['latin'] })
// ${dmSans.className}
export const metadata: Metadata = {
     title: {
          default: 'A2 Technologies',
          template: '%s | A2 Technologies',
     },
     description: 'Pioneering Engineering Solutions for a Greener Tomorrow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
          <html lang='en'>
               <head>
                    <link rel='icon' href='/favicon.ico' />
               </head>
               <body>
                    <Navbar />
                    {children}
                    <Footer />
               </body>
          </html>
     )
}
