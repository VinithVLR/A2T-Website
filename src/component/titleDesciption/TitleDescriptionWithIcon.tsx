'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './TitleDescriptionWithIcon.module.scss'
import Image, { StaticImageData } from 'next/image'
import Button from '../button/Button'
import Image1 from '../../assets/images/img_service_1.png'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/navigation'
import { MainHeading, MainPara, SecondaryHeading } from '../typography/Typography'

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
     isFlag?: any
     rowReverse?: any
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
     isFlag,
     rowReverse,
}) => {
     const router = useRouter()
     const titleRef = useRef<HTMLHeadingElement>(null)
     const descRef = useRef<HTMLParagraphElement>(null)
     const iconWrapperRef = useRef<HTMLDivElement>(null)
     const detailsRef = useRef<HTMLDivElement | null>(null)
     const subTitleRef = useRef<HTMLDivElement | null>(null)
     const [windowWidth, setWindowWidth] = useState(
          typeof window != 'undefined' ? window.innerWidth : 0,
     )
     const initialFunc = async () => {
          if (typeof window !== 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               if (isFlag) {
                    gsap.fromTo(
                         detailsRef.current,
                         {
                              ...(windowWidth <= 768
                                   ? { y: '50%' }
                                   : { x: rowReverse ? '-30%' : '30%' }),

                              opacity: 0,
                         },
                         {
                              ...(windowWidth <= 768 ? { y: '0%' } : { x: '0%' }),
                              opacity: 1,
                              duration: 1.2,
                              ease: 'power2.inOut',
                              scrollTrigger: {
                                   trigger: detailsRef.current,
                                   ...(windowWidth <= 768
                                        ? { start: 'top 90%' }
                                        : { start: 'top 50%' }),
                                   end: 'bottom 20%',
                                   toggleActions: 'play none none none',
                              },
                         },
                    )
               } else {
                    gsap.fromTo(
                         [titleRef.current, descRef.current, subTitleRef.current],
                         { y: '80%', opacity: 0 },
                         {
                              y: '0%',
                              opacity: 1,
                              duration: 0.8,
                              ease: 'power2.out',

                              scrollTrigger: {
                                   trigger: titleRef.current,
                                   start: 'top 80%',
                                   end: 'bottom 20%',
                                   toggleActions: 'play none none none',
                              },
                         },
                    )
                    gsap.fromTo(
                         iconWrapperRef.current,
                         { y: '-80%', opacity: 0 },
                         {
                              y: '0%',
                              opacity: 1,
                              duration: 0.8,
                              ease: 'power2.out',
                              scrollTrigger: {
                                   trigger: iconWrapperRef.current,
                                   start: 'top 70%',
                                   end: 'bottom 20%',
                                   toggleActions: 'play none none none',
                              },
                         },
                    )
               }
               const handleResize = () => setWindowWidth(window.innerWidth)
               window.addEventListener('resize', handleResize)
               return () => window.removeEventListener('resize', handleResize)
          }
     }

     useEffect(() => {
          initialFunc()
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

     return (
          <div className={styles.main_con} ref={detailsRef} style={{ ...style }}>
               {icon && (
                    <div className={styles.iconWrapper} ref={iconWrapperRef}>
                         <Image src={icon} alt='Vision Icon' className={styles.image} />
                    </div>
               )}
               {label && (
                    <label className={styles.label} style={{ ...labelStyle }}>
                         {label ? label : 'The Padikkal Foundation'}
                    </label>
               )}
               <MainHeading className={styles.title} ref={titleRef} style={{ ...headingStyle }}>
                    {title}
               </MainHeading>
               {subTitle && (
                    <h4 ref={subTitleRef} className={styles.subTitle}>
                         {subTitle}
                    </h4>
               )}
               {bgimage && (
                    <div className={styles.img_wrapper}>
                         <Image src={bgimage} alt='' className={styles.image} />
                    </div>
               )}
               <MainPara className={styles.description} ref={descRef} style={{ ...paraStyle }}>
                    {description}
               </MainPara>
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
