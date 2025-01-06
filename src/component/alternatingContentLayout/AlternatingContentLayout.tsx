'use client'
import React, { useCallback, useEffect, useRef } from 'react'
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
     const sectionRefs = useRef<HTMLDivElement[]>([])
     const imageSectionRefs = useRef<HTMLDivElement[]>([])
     const imgWrapperRefs = useRef<HTMLDivElement[]>([])
     const descRefs = useRef<HTMLDivElement[]>([])
     const initialFunc = useCallback(async () => {
          if (typeof window !== 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               content.forEach((_, index) => {
                    const timeline = gsap.timeline({
                         scrollTrigger: {
                              trigger: sectionRefs.current[index],
                              start: 'top 50%',
                              end: 'bottom 20%',
                              toggleActions: 'play none none none',
                         },
                    })
                    timeline
                         .fromTo(
                              imageSectionRefs.current[index],
                              {
                                   opacity: 0,
                                   scale: 1,
                              },
                              {
                                   opacity: 1,
                                   scale: 1,
                                   duration: 1,
                              },
                              0,
                         )
                         .fromTo(
                              imgWrapperRefs.current[index],
                              {
                                   opacity: 0,
                                   scale: 0.5,
                              },
                              {
                                   opacity: 1,
                                   scale: 1,
                                   duration: 1,
                              },
                              0,
                         )
                         .fromTo(
                              descRefs.current[index],
                              {
                                   x: '30%',
                                   opacity: 0,
                              },
                              {
                                   x: '0%',
                                   opacity: 1,
                                   duration: 1,
                              },
                              0,
                         )
               })
          }
     }, [content])
     useEffect(() => {
          initialFunc()
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

     return (
          <>
               {content.map((item, index) => {
                    const isOdd = index % 2 !== 0
                    return (
                         <section
                              id={item.link || ''}
                              key={index}
                              ref={(el: any) => (sectionRefs.current[index] = el)}
                              className={`${styles.main_con} `}
                              style={{
                                   justifyContent: isOdd ? 'flex-start' : 'center',
                              }}
                         >
                              <div className={styles.image_section}>
                                   <div
                                        className={styles.image_wrapper}
                                        ref={(el: any) => (imageSectionRefs.current[index] = el)}
                                   >
                                        <Image
                                             src={item.bgImage}
                                             alt='Background image'
                                             priority
                                             className={styles.image}
                                        />
                                        <div
                                             className={styles.img_ab}
                                             ref={(el: any) => (imgWrapperRefs.current[index] = el)}
                                        >
                                             <Image
                                                  src={item.img}
                                                  alt='Overlay image'
                                                  priority
                                                  className={styles.image}
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div
                                   className={styles.details_section}
                                   ref={(el: any) => (descRefs.current[index] = el)}
                              >
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
