'use client'
import { useRef, useEffect } from 'react'
import styles from './SecondaryLanding.module.scss'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { MainHeading, MainPara } from '../typography/Typography'

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
     const imgOverlayRef = useRef(null)
     const textSectionRef = useRef(null)
     const initialFunc = async () => {
          if (typeof window != 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               if (imgOverlayRef.current) {
                    gsap.fromTo(
                         imgOverlayRef.current,
                         { opacity: 0, scale: 0.8 },
                         {
                              opacity: 1,
                              scale: 1,
                              duration: 1.5,
                              ease: 'power3.out',
                              scrollTrigger: {
                                   trigger: imgOverlayRef.current,
                                   start: 'top 80%',
                                   end: 'bottom 20%',
                                   toggleActions: 'play none none none',
                                   once: true,
                              },
                         },
                    )
               }
               gsap.fromTo(
                    textSectionRef.current,
                    {
                         opacity: 0,
                         y: 50,
                    },
                    {
                         y: 0,
                         opacity: 1,
                         duration: 1,
                         scrollTrigger: {
                              trigger: textSectionRef.current,
                              start: 'top 80%',
                              end: 'bottom 20%',
                              toggleActions: 'play none none none',
                              once: true,
                         },
                    },
               )
          }
     }
     useEffect(() => {
          initialFunc()
     }, [])

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
                    <div className={styles.con_wrapper} ref={textSectionRef}>
                         <MainHeading className={`${styles.heading}  ${styles.blackText}`}>
                              {heading}
                         </MainHeading>

                         {Array.isArray(description) ? (
                              <ul className={styles.desc}>
                                   {description.map((item, index) => (
                                        <li key={index} className={styles.bulletItem}>
                                             <MainPara>{item}</MainPara>
                                        </li>
                                   ))}
                              </ul>
                         ) : (
                              <MainPara
                                   className={`${styles.description} ${styles.regularText}`}
                                   style={{ width: flexReverse ? '100%' : '75%' }}
                              >
                                   {description}
                              </MainPara>
                         )}
                    </div>
               </div>
               <div className={styles.image_section}>
                    <div className={styles.image_wrapper}>
                         <Image
                              src={bgImage}
                              alt='image'
                              placeholder='blur'
                              priority
                              className={styles.image}
                         />
                         <div className={styles.image_ab_con} style={{ ...bsStyle }}>
                              <Image
                                   src={image}
                                   alt='image'
                                   placeholder='blur'
                                   ref={imgOverlayRef}
                                   priority
                                   className={styles.img_ab}
                              />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default SecondaryLanding
