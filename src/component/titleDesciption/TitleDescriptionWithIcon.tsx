'use client'

import React, { useEffect } from 'react'
import styles from './TitleDescriptionWithIcon.module.scss'
import Image, { StaticImageData } from 'next/image'
import Button from '../button/Button'
import Image1 from '../../assets/images/img_service_1.png'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/navigation'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})

interface ItemProps {
     title: React.ReactNode
     description?: string
     icon?: any
     subTitle?: string
     style?: any
     btnColor?: any
     btn?: any
     headingStyle?: any
     bgimage?: any
     paraStyle?: any
     label?: boolean
     labelStyle?: any
     link?: any
}
const TitleDescriptionWithIcon: React.FC<ItemProps> = ({
     title,
     description,
     icon,
     subTitle,
     style,
     btnColor,
     btn,
     headingStyle,
     bgimage,
     paraStyle,
     label,
     labelStyle,
     link,
}) => {
     const router = useRouter()
     return (
          <div className={styles.main_con} style={{ ...style }}>
               {icon && (
                    <div className={styles.iconWrapper}>
                         <Image src={icon} alt='Vision Icon' className={styles.image} />
                    </div>
               )}
               {label && (
                    <label className={styles.label} style={{ ...labelStyle }}>
                         {label ? label : 'The Padikkal Foundation'}
                    </label>
               )}
               <h2 className={styles.title} style={{ ...headingStyle }}>
                    {title}
               </h2>
               {subTitle && <h4 className={styles.subTitle}>{subTitle}</h4>}
               {bgimage && (
                    <div className={styles.img_wrapper}>
                         <Image src={bgimage} alt='' className={styles.image} />
                    </div>
               )}
               <p className={styles.description} style={{ ...paraStyle }}>
                    {description}
               </p>
               {btn && (
                    <Button
                         label={'Explore more'}
                         disabled={false}
                         style={{
                              width: 'fit-content',
                              backgroundColor: btnColor,
                              gap: '0.8rem',
                              marginBlock: '2rem',
                              paddingBlock: '0.8rem',
                         }}
                         loading={false}
                         icon
                         onClick={() => {
                              router.push(link)
                         }}
                         labestyle={{ marginLeft: '0px', fontSize: '0.8rem' }}
                    />
               )}
          </div>
     )
}

export default TitleDescriptionWithIcon
