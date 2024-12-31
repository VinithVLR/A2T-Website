'use client'
import React, { useCallback, useEffect } from 'react'
import styles from './AlternatingContentLayout.module.scss'
import Image from 'next/image'

interface ContentItem {
     title: string
     description: string
     img: string
     bgImage: string
     link?: string
}

interface AlternatingContentLayoutProps {
     content: ContentItem[]
}

const AlternatingContentLayout: React.FC<AlternatingContentLayoutProps> = ({ content }) => {
     const initialFunc = useCallback(async () => {
          if (typeof window != 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               content.forEach((_, index) => {
                    const timeline = gsap.timeline({
                         scrollTrigger: {
                              trigger: `.image-section-${index}`,
                              start: 'top 90%',
                              toggleActions: 'play none none none',
                         },
                    })

                    timeline.fromTo(
                         `.image-section-${index} .${styles.image}`,
                         { opacity: 0, scale: 0.5 },
                         {
                              opacity: 1,
                              scale: 1,
                              duration: 1,
                         },
                    )

                    timeline.fromTo(
                         `.image-section-${index} .${styles.img_ab}`,
                         { opacity: 0, scale: 0.9 },
                         {
                              opacity: 1,
                              scale: 1,
                              duration: 1,
                         },
                         '-=0.5',
                    )

                    timeline.fromTo(
                         `.image-section-${index} .${styles.details_section}`,
                         { x: '30%', opacity: 0 },
                         {
                              x: '0%',
                              opacity: 1,
                              duration: 1,
                              ease: 'power3.out',
                         },
                         '-=0.5',
                    )
               })
          }
     }, [content])

     useEffect(() => {
          initialFunc()
     }, [initialFunc])

     return (
          <>
               {content.map((item, index) => {
                    const isOdd = index % 2 !== 0
                    return (
                         <section
                              id={item.link || ''}
                              key={index}
                              className={`${styles.main_con} ${isOdd ? styles.odd : styles.even} image-section-${index}`}
                         >
                              <div className={styles.image_section}>
                                   <div className={styles.image_wrapper}>
                                        <Image
                                             src={item.bgImage}
                                             alt='Background image'
                                             priority
                                             className={styles.image}
                                        />
                                        <div className={styles.img_ab}>
                                             <Image
                                                  src={item.img}
                                                  alt='Overlay image'
                                                  priority
                                                  className={styles.image}
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div className={styles.details_section}>
                                   <div className={styles.con_wrapper}>
                                        <h2 className={`${styles.heading} ${styles.blackText}`}>
                                             {item.title}
                                        </h2>
                                        <p
                                             className={`${styles.description} ${styles.regularText}`}
                                        >
                                             {item.description}
                                        </p>
                                   </div>
                              </div>
                         </section>
                    )
               })}
          </>
     )
}

export default AlternatingContentLayout
