'use client'

import styles from './PadikalFoundation.module.scss'
import sm1 from '../../../assets/images/careers/img_padikal_sm1.png'
import canva1 from '../../../assets/images/careers/canva_padikal.png'
import canva2 from '../../../assets/images/careers/canva_padikal2.png'
import canva3 from '../../../assets/images/careers/canva_padikal3.png'
import sm2 from '../../../assets/images/careers/img_padikal_sm2.png'
import lg1 from '../../../assets/images/careers/img_padikal_lg1.png'
import lg2 from '../../../assets/images/careers/img_padikal_lg2.png'
import Button from '@/component/button/Button'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MainHeading, MainPara, TertiaryPara } from '@/component/typography/Typography'

function PadikalFoundation() {
     const [width, setWidth] = useState(true)

     const sectionRef: any = useRef(null)
     const titleCardRef: any = useRef(null)
     const headingRef: any = useRef(null)
     const imageRefs: any = useRef({
          sm1: null,
          canva1: null,
          lg1: null,
          canva2: null,
          sm2: null,
          lg2: null,
          canva3: null,
     })
     const paraRef: any = useRef(null)
     const buttonRef: any = useRef(null)

     useEffect(() => {
          if (typeof window !== 'undefined') {
               const innerWidth = window.innerWidth
               setWidth(innerWidth >= 768)
          }

          const handleResize = () => {
               setWidth(window.innerWidth >= 768)
          }

          window.addEventListener('resize', handleResize)
          return () => window.removeEventListener('resize', handleResize)
     }, [])

     const initialFunc = async () => {
          const { gsap } = await import('gsap')
          const { ScrollTrigger } = await import('gsap/ScrollTrigger')
          gsap.registerPlugin(ScrollTrigger)

          const section = sectionRef.current
          const titleCard = titleCardRef.current
          const heading = headingRef.current
          const para = paraRef.current
          const button = buttonRef.current

          if (!section || !titleCard || !heading || !para || !button) return

          // Create timeline
          const tl = gsap.timeline({
               scrollTrigger: {
                    trigger: section,
                    start: 'top center+=100',
                    // markers: true, // Uncomment for debugging
               },
          })

          if (window.innerWidth <= 768) {
               // Mobile animations - simple fade up for all elements
               gsap.set([titleCard, heading, imageRefs.current.sm1, para, button], {
                    y: 50,
                    opacity: 0,
               })

               tl.to([titleCard, heading, imageRefs.current.sm1, para, button], {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: 'power2.out',
               })
          } else {
               // Desktop animations
               // Initial state
               gsap.set([titleCard, heading], { x: 70, opacity: 0 })
               gsap.set(
                    [
                         imageRefs.current.sm1,
                         imageRefs.current.canva1,
                         imageRefs.current.lg1,
                         imageRefs.current.canva2,
                         imageRefs.current.sm2,
                         imageRefs.current.lg2,
                         imageRefs.current.canva3,
                    ].filter(Boolean),
                    { scale: 0.8, opacity: 0 },
               )
               gsap.set([para, button], { y: 60, opacity: 0 })

               // Animation sequence
               tl.to([titleCard, heading], {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: 'power2.out',
               })

               // Image animations in sequence
               const imageOrder = ['sm1', 'canva1', 'lg1', 'canva2', 'sm2', 'lg2', 'canva3']
               imageOrder.forEach((imgKey) => {
                    const img = imageRefs.current[imgKey]
                    if (img) {
                         tl.to(
                              img,
                              {
                                   scale: 1,
                                   opacity: 1,
                                   duration: 0.5,
                                   ease: 'power2.out',
                              },
                              '-=0.3',
                         )
                    }
               })

               // Para and button animation
               tl.to(
                    [para, button],
                    {
                         y: 0,
                         opacity: 1,
                         duration: 0.6,
                         stagger: 0.2,
                         ease: 'power2.out',
                    },
                    '-=0.3',
               )
          }
     }

     useEffect(() => {
          initialFunc()
     }, [])

     return (
          <section className={styles.bodyMainCon} ref={sectionRef}>
               <div className={`${styles.cont} ${styles.mobileView}`}>
                    <div className={styles.flex}>
                         <Image
                              src={sm1}
                              alt=''
                              className={styles.mobileCover}
                              ref={(el) => {
                                   imageRefs.current.sm1 = el
                              }}
                         />
                         {width && (
                              <Image
                                   src={canva1}
                                   alt=''
                                   ref={(el) => {
                                        imageRefs.current.canva1 = el
                                   }}
                              />
                         )}
                         {width && (
                              <Image
                                   src={lg1}
                                   alt=''
                                   ref={(el) => {
                                        imageRefs.current.lg1 = el
                                   }}
                              />
                         )}
                    </div>
                    <div>
                         <MainPara className={styles.para} ref={paraRef}>
                              Padikkal Foundation empowers underprivileged individuals by offering
                              access to quality education and professional training. We connect
                              aspiring talents with expert mentors and renowned institutes, ensuring
                              they gain the skills and opportunities needed to succeed in their
                              careers and build a brighter future.
                         </MainPara>
                         <div ref={buttonRef}>
                              <Button
                                   label='Explore our Purpose'
                                   disabled={false}
                                   icon
                                   className={styles.applyBtn}
                                   loading={false}
                                   labestyle={{
                                        fontSize: '0.925rem',
                                        marginRight: '5px',
                                   }}
                              />
                         </div>
                    </div>
               </div>
               <div className={`${styles.cont} ${styles.paddingTop} ${styles.sideCont}`}>
                    <div className={styles.titleCard} ref={titleCardRef}>
                         <TertiaryPara>The Padikkal Foundation</TertiaryPara>
                    </div>
                    <MainHeading
                         className={`${styles.heading} ${styles.blackText} ${styles.sectionHeading}`}
                         ref={headingRef}
                    >
                         Shaping Futures with Professional Training and Global Opportunities
                    </MainHeading>
                    {width && (
                         <div className={`${styles.flex} ${styles.secondContainer}`}>
                              <Image
                                   src={sm2}
                                   alt=''
                                   ref={(el) => {
                                        imageRefs.current.sm2 = el
                                   }}
                              />
                              <Image
                                   src={canva3}
                                   alt=''
                                   ref={(el) => {
                                        imageRefs.current.canva3 = el
                                   }}
                              />
                              <Image
                                   src={lg2}
                                   alt=''
                                   ref={(el) => {
                                        imageRefs.current.lg2 = el
                                   }}
                              />
                         </div>
                    )}
               </div>
               {width && (
                    <Image
                         src={canva2}
                         alt=''
                         className={styles.canvaImage}
                         ref={(el) => {
                              imageRefs.current.canva2 = el
                         }}
                    />
               )}
          </section>
     )
}

export default PadikalFoundation
