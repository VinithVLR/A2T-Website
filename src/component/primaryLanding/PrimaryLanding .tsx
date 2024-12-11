'use client'
import React, { ReactElement, useEffect, useState } from 'react'
import styles from './PrimaryLanding .module.scss'
import Image, { StaticImageData } from 'next/image'
import img_contact from '../../assets/images/img_contact.png'
import { Inter } from 'next/font/google'
import thumb_nail from '../../assets/images/img_contact_thumb.png'
const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '600', '800'],
     style: ['normal'],
})

interface heading {
     title: string
     heading: ReactElement<any, any>
     description: string
     isReverse?: boolean
     bigImageSrc?: StaticImageData
     smallImageSrc?: StaticImageData
     isThumbnailHidden?: boolean
     style?: any
}
const PrimaryLanding = ({
     title,
     heading,
     description,
     isReverse = false,
     bigImageSrc,
     smallImageSrc,
     isThumbnailHidden,
     style,
}: heading) => {
     const [isSmallScreen, setIsSmallScreen] = useState(false)

     useEffect(() => {
          const handleResize = () => {
               setIsSmallScreen(window.innerWidth <= 748)
          }

          handleResize()
          window.addEventListener('resize', handleResize)

          return () => {
               window.removeEventListener('resize', handleResize)
          }
     }, [])
     return (
          <section
               className={`${styles.main_con} ${inter.className}`}
               style={isReverse ? { flexDirection: isSmallScreen ? 'column' : 'row-reverse' } : {}}
          >
               <div className={styles.image_section}>
                    <div className={styles.image_wrapper}>
                         <Image
                              src={bigImageSrc ? bigImageSrc : img_contact}
                              alt='image'
                              priority
                              className={styles.image}
                         />
                    </div>
               </div>
               <div className={styles.details_section}>
                    <div
                         className={styles.con_wrapper}
                         style={isSmallScreen ? undefined : { ...style }}
                    >
                         <div className={`${styles.btn_container} ${styles.semiBoldText}`}>
                              {title}
                         </div>
                         <h3 className={`${styles.heading}  ${styles.blackText}`}>{heading}</h3>
                         <p className={`${styles.description} ${styles.regularText}`}>
                              {description}
                         </p>
                         {!isThumbnailHidden && (
                              <div className={styles.thumb_nailWrapper_con}>
                                   <div className={styles.thumb_nailWrapper}>
                                        <Image
                                             src={smallImageSrc ? smallImageSrc : thumb_nail}
                                             alt=''
                                             className={styles.image}
                                        />
                                   </div>
                              </div>
                         )}
                    </div>
               </div>
          </section>
     )
}

export default PrimaryLanding
