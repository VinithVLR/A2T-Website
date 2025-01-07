'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './ImageDescriptionRow.module.scss'
import Image from 'next/image'
import imgLayer1 from '../../assets/images/img_row/img_bg_1.png'
import imgLayer2 from '../../assets/images/img_row/img_bg_2.png'
import imgLayer3 from '../../assets/images/img_row/img_bg_3.png'
import imgAb1 from '../../assets/images/img_row/img_buz_ab1.png'
import imgAb3 from '../../assets/images/img_row/img_buz_ab2.png'
import imgAb2 from '../../assets/images/img_row/img_buz_ab3.png'
import imgEng1 from '../../assets/images/img_row/img_eng-ser_ly1.png'
import imgEng2 from '../../assets/images/img_row/img_eng-ser_ly2.png'
import imgEng3 from '../../assets/images/img_row/img_eng-ser_ly3.png'

interface ImageDescriptionRowProps {
     keyProp?: boolean
}

const ImageDescriptionRow: React.FC<ImageDescriptionRowProps> = ({ keyProp }) => {
     const firstSectionRef = useRef<HTMLDivElement>(null)
     const secondSectionRef = useRef<HTMLDivElement>(null)
     const thirdSectionRef = useRef<HTMLDivElement>(null)
     const [windowWidth, setWindowWidth] = useState(
          typeof window != 'undefined' ? window.innerWidth : 0,
     )
     const initialFunc = useCallback(async () => {
          if (typeof window !== 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               const sections = [
                    {
                         ref: firstSectionRef,
                         relClass: styles.frst_image_rel,
                         absClass: styles.img_abs,
                    },
                    {
                         ref: secondSectionRef,
                         relClass: styles.sec_image_rel,
                         absClass: styles.img_abs,
                    },
                    {
                         ref: thirdSectionRef,
                         relClass: styles.third_image_rel,
                         absClass: styles.img_abs,
                    },
               ]

               sections.forEach(({ ref, relClass, absClass }, index) => {
                    const relImage = ref.current?.querySelector(`.${relClass}`)
                    const absImage = ref.current?.querySelector(`.${absClass}`)

                    if (relImage) {
                         gsap.fromTo(
                              relImage,
                              { opacity: 0 },
                              {
                                   opacity: 1,
                                   duration: 1,
                                   ease: 'power3.out',
                                   scrollTrigger: {
                                        trigger: ref.current,
                                        start: windowWidth ? 'top 80%' : 'top 50%',
                                        end: 'bottom 20%',
                                        toggleActions: 'play none none none',
                                        once: true,
                                   },
                              },
                         )
                    }

                    if (absImage) {
                         gsap.fromTo(
                              absImage,
                              { opacity: 0, scale: 0.9 },
                              {
                                   opacity: 1,
                                   scale: 1,
                                   delay: index * 0.2,
                                   duration: 1,
                                   ease: 'power3.out',
                                   scrollTrigger: {
                                        trigger: ref.current,
                                        start: windowWidth ? 'top 80%' : 'top 50%',
                                        end: 'bottom 20%',
                                        toggleActions: 'play none none none',
                                        once: true,
                                   },
                              },
                         )
                    }
               })
          }
     }, [windowWidth])
     useEffect(() => {
          initialFunc()
     }, [initialFunc])

     return (
          <section className={styles.imgDesc_con}>
               <div className={styles.content_Wrapper}>
                    <div ref={firstSectionRef} className={styles.first_image_section}>
                         <div className={styles.frst_img_rel}>
                              <Image
                                   src={imgLayer1}
                                   alt='First image'
                                   className={styles.frst_image_rel}
                              />
                              <div className={styles.img_abs}>
                                   <Image
                                        src={keyProp ? imgAb1 : imgEng1}
                                        alt='Animated image'
                                        className={styles.image_abs}
                                   />
                              </div>
                         </div>
                    </div>
                    <div ref={secondSectionRef} className={styles.sec_image_section}>
                         <div className={styles.sec_img_rel}>
                              <Image
                                   src={imgLayer2}
                                   alt='Second image'
                                   className={styles.sec_image_rel}
                              />
                              <div className={styles.img_abs}>
                                   <Image
                                        src={keyProp ? imgAb2 : imgEng2}
                                        alt='Animated image'
                                        className={styles.image_abs}
                                   />
                              </div>
                         </div>
                    </div>
                    <div ref={thirdSectionRef} className={styles.third_image_section}>
                         <div className={styles.third_img_rel}>
                              <Image
                                   src={imgLayer3}
                                   alt='Third image'
                                   className={styles.third_image_rel}
                              />
                              <div className={styles.img_abs}>
                                   <Image
                                        src={keyProp ? imgAb3 : imgEng3}
                                        alt='Animated image'
                                        className={styles.image_abs}
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default ImageDescriptionRow
