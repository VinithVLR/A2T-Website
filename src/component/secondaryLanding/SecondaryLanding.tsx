'use client'
import React, { useEffect, useState } from 'react'
import styles from './SecondaryLanding.module.scss'
import { Inter } from 'next/font/google'
import Image, { StaticImageData } from 'next/image'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '600', '800'],
     style: ['normal'],
})

interface SecondaryLandingProps {
     flexReverse?: boolean
     heading: string
     description: string | string[]
     image: any
     bgImage: any
     bgColor?: React.CSSProperties
     bsStyle?: React.CSSProperties
     id?: any
}
const SecondaryLanding: React.FC<SecondaryLandingProps> = ({
     flexReverse,
     heading,
     description,
     image,
     bgImage,
     bgColor,
     bsStyle,
     id,
}) => {
     return (
          <section
               id={id ? id : ''}
               className={`${styles.main_con} ${flexReverse ? styles.reverse : ''} ${inter.className}`}
               style={bgColor && { ...bgColor }}
          >
               <div
                    className={styles.details_section}
                    style={{ paddingInlineStart: flexReverse ? '5rem' : '' }}
               >
                    <div className={styles.con_wrapper}>
                         <h3 className={`${styles.heading}  ${styles.blackText}`}>{heading}</h3>

                         {Array.isArray(description) ? (
                              <ul className={styles.desc}>
                                   {description.map((item, index) => (
                                        <li key={index} className={styles.bulletItem}>
                                             {item}
                                        </li>
                                   ))}
                              </ul>
                         ) : (
                              <p
                                   className={`${styles.description} ${styles.regularText}`}
                                   style={{ width: flexReverse ? '100%' : '75%' }}
                              >
                                   {description}
                              </p>
                         )}
                    </div>
               </div>
               <div className={styles.image_section}>
                    <div className={styles.image_wrapper}>
                         <Image src={bgImage} alt='image' priority className={styles.image} />
                         <div className={styles.image_ab_con} style={{ ...bsStyle }}>
                              <Image src={image} alt='image' priority className={styles.img_ab} />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default SecondaryLanding
