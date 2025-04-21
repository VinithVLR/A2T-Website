import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/component/navbar/Navbar'
import Footer from '@/component/footer/Footer'
import { inter } from '../../public/fonts/inter'
import { nunito } from '../../public/fonts/inter'
import { dmSans } from '../../public/fonts/inter'
import { Suspense } from 'react'
import Loading from './loading'
import { IdProvider } from '@/component/context/TokenProvider'
import { ToastContainer } from 'react-toastify'

export const metadata: Metadata = {
     title: {
          default: 'A2 Technologies',
          template: '%s | A2 Technologies',
     },
     description: 'Pioneering Engineering Solutions for a Greener Tomorrow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
          <html lang='en' className={`${inter.variable} ${nunito.variable} ${dmSans.variable}`}>
               <head>
                    <link rel='icon' href='/favicon.ico' />
               </head>
               <body>
                    <IdProvider>
                         <Suspense fallback={<Loading />}>
                              <Navbar />
                              {children}
                              <ToastContainer
                                   position='top-center'
                                   autoClose={2000}
                                   hideProgressBar={true}
                                   newestOnTop={false}
                                   closeOnClick
                                   pauseOnFocusLoss
                                   draggable
                                   pauseOnHover
                                   closeButton={false}
                                   toastStyle={{
                                        minHeight: '30px',
                                        backgroundColor: '#fff',
                                        color: 'green',
                                        borderRadius: '25px',
                                        width: 'auto',
                                        paddingInline: '2rem',
                                        fontFamily: 'poppins',
                                   }}
                              />
                              <Footer />
                         </Suspense>
                    </IdProvider>
               </body>
          </html>
     )
}
