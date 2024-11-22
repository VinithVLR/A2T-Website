import React from 'react'
import styles from './Header.module.scss'
import { Inter } from 'next/font/google'

interface ObjProps {
     title: string
     subTitle?: string
     titleStyle?: React.CSSProperties // allows for broader styling options
}

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})

const Header: React.FC<ObjProps> = ({ title, subTitle, titleStyle }) => {
     return (
          <section className={`${styles.headerSection} ${inter.className}`}>
               <h2
                    className={`${styles.headerTitle} ${styles.blackText}`}
                    style={titleStyle ?? titleStyle}
               >
                    {title}
               </h2>
               {subTitle && (
                    <h5 className={`${styles.headerSubtitle} ${styles.regularText}`}>{subTitle}</h5>
               )}
          </section>
     )
}

export default Header
