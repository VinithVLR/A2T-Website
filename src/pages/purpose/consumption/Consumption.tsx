'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './Consumption.module.scss'
import Image from 'next/image'
import icontool from '../../assets/icons/ic_tool.svg'
import iconNavigate from '../../assets/icons/ic_navigate.svg'
import { Inter } from 'next/font/google'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})

const Consumption = ({ data }: any) => {
     const title = data?.title
     const des = data?.description

     const [windowWidth, setWindowWidth] = useState(
          typeof window != 'undefined' ? window.innerWidth : 0,
     )

     const containerRef = useRef<HTMLDivElement>(null)

     useEffect(() => {
          if (typeof window != 'undefined') {
               const handleResize = () => setWindowWidth(window.innerWidth)
               window.addEventListener('resize', handleResize)
               return () => window.removeEventListener('resize', handleResize)
          }
     }, [])

     return (
          <section className={`${styles.consumption} ${inter.className}`}>
               <div className={`${styles.header}`}>
                    <div className={`${styles.flex_con}`}>
                         <h4>{title} &nbsp;</h4>
                    </div>
                    <p className={`${styles.para} ${styles.regularText}`}>{des}</p>
               </div>
               {windowWidth <= 768 ? (
                    <div className={styles.mob_img_wrp}>
                         <Image src={data.image} alt='icon' className={styles.image} />
                         <Image src={data.bgImage} alt='icon' className={styles.bgImage} />
                    </div>
               ) : null}
          </section>
     )
}

export default Consumption
