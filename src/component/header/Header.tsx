import React, { ReactNode } from 'react'
import styles from './Header.module.scss'
import { Inter } from 'next/font/google'

interface ObjProps {
     title: string | ReactNode
     subTitle?: string
     titleStyle?: React.CSSProperties
     subtitleStyle?: React.CSSProperties
     containerStyle?: string
}

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})

const Header: React.FC<ObjProps> = ({
     title,
     subTitle,
     titleStyle,
     subtitleStyle,
     containerStyle,
}) => {
     return (
          <section className={`${styles.headerSection} ${inter.className} ${containerStyle}`}>
               <h2
                    className={`${styles.headerTitle} ${styles.blackText}`}
                    style={titleStyle ?? titleStyle}
               >
                    {title}
               </h2>
               {subTitle && (
                    <h5
                         className={`${styles.headerSubtitle} ${styles.regularText}`}
                         style={subtitleStyle ?? subtitleStyle}
                    >
                         {subTitle}
                    </h5>
               )}
          </section>
     )
}

export default Header
