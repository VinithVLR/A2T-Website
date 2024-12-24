import React, { ReactNode } from 'react'
import styles from './Header.module.scss'
import { Inter } from 'next/font/google'
import { MainHeading, MainPara } from '../typography/Typography'

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
               <MainHeading
                    className={`${styles.headerTitle} ${styles.blackText}`}
                    style={titleStyle ?? titleStyle}
               >
                    {title}
               </MainHeading>
               {subTitle && (
                    <MainPara
                         className={`${styles.headerSubtitle} ${styles.regularText}`}
                         style={subtitleStyle ?? subtitleStyle}
                    >
                         {subTitle}
                    </MainPara>
               )}
          </section>
     )
}

export default Header
