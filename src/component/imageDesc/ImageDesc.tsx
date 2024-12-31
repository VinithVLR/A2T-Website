'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import styles from './ImageDesc.module.scss'
import { SecondaryHeading, SecondaryPara } from '../typography/Typography'

interface imageDescProps {
     imageUrl: string
     title: string
     description: string | string[]
     rowReverse?: boolean
     style?: any
     label?: string
     link?: string
     opacityAnimation: boolean
}

const ImageDesc = ({
     imageUrl,
     title,
     description,
     rowReverse,
     style,
     label,
     link,
     opacityAnimation,
}: imageDescProps) => {
     const [isSmallScreen, setIsSmallScreen] = useState(false)

     const imageSectionRef = useRef(null)
     const textSectionRef = useRef(null)
     useEffect(() => {
          const handleResize = () => {
               setIsSmallScreen(window.innerWidth <= 768)
          }

          handleResize()
          window.addEventListener('resize', handleResize)

          return () => {
               window.removeEventListener('resize', handleResize)
          }
     }, [])

     const initialFunc = useCallback(async () => {
          if (typeof window != 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               if (opacityAnimation) {
                    if (!imageSectionRef.current || !textSectionRef.current) return
                    gsap.fromTo(
                         imageSectionRef.current,
                         {
                              opacity: 0,
                              scale: 0.5,
                         },
                         {
                              opacity: 1,
                              scale: 1,
                              duration: 1,
                              scrollTrigger: {
                                   trigger: imageSectionRef.current,
                                   start: 'top 80%',
                                   toggleActions: 'play none none none',
                                   once: true,
                              },
                         },
                    )

                    gsap.fromTo(
                         textSectionRef.current,
                         {
                              x: rowReverse ? '-30%' : '30%',
                              opacity: 0,
                         },
                         {
                              x: '0%',
                              opacity: 1,
                              duration: 1,
                              scrollTrigger: {
                                   trigger: textSectionRef.current,
                                   start: 'top 80%',
                                   toggleActions: 'play none none none',
                                   once: true,
                              },
                         },
                    )
               } else {
                    if (!imageSectionRef.current || !textSectionRef.current) return
                    gsap.fromTo(
                         imageSectionRef.current,
                         {
                              opacity: 0,
                              // scale: 0.5,
                         },
                         {
                              opacity: 1,
                              scale: 1,
                              duration: 1,
                              scrollTrigger: {
                                   trigger: imageSectionRef.current,
                                   start: 'top 80%',
                                   toggleActions: 'play none none none',
                                   once: true,
                              },
                         },
                    )
                    gsap.fromTo(
                         textSectionRef.current,
                         {
                              opacity: 0,
                              y: 30,
                         },
                         {
                              y: 0,
                              opacity: 1,
                              duration: 1,
                              scrollTrigger: {
                                   trigger: textSectionRef.current,
                                   start: 'top 80%',
                                   toggleActions: 'play none none none',
                                   once: true,
                              },
                         },
                    )
               }
          }
     }, [rowReverse, opacityAnimation])

     useEffect(() => {
          initialFunc()
     }, [initialFunc])

     return (
          <section
               id={link || ''}
               className={styles.imageDesc_con}
               style={{
                    flexDirection: isSmallScreen
                         ? undefined
                         : rowReverse
                           ? 'row-reverse'
                           : undefined,
                    ...style,
               }}
          >
               <div
                    ref={imageSectionRef}
                    className={styles.image_section}
                    style={{ justifyContent: rowReverse ? 'end' : 'left' }}
               >
                    <div className={styles.imageContainer}>
                         <Image src={imageUrl} alt={title} className={styles.image} />
                    </div>
               </div>
               <div
                    ref={textSectionRef}
                    className={styles.textContainer}
                    style={{
                         justifyContent: rowReverse ? 'flex-end' : undefined,
                         textAlign: rowReverse ? 'end' : undefined,
                         width: '100%',
                    }}
               >
                    <div className={styles.details_con}>
                         <SecondaryHeading className={styles.title}>{title}</SecondaryHeading>
                         {label && <label>{label}</label>}
                         {Array.isArray(description) ? (
                              <ul className={styles.desc}>
                                   {description.map((item, index) => (
                                        <li key={index} className={styles.bulletItem}>
                                             {item}
                                        </li>
                                   ))}
                              </ul>
                         ) : (
                              <SecondaryPara className={styles.desc}>{description}</SecondaryPara>
                         )}
                    </div>
               </div>
          </section>
     )
}

export default ImageDesc
