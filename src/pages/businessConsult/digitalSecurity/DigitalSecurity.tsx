'use client'
import { useEffect, useRef } from 'react'
import styles from './DigitalSecurity.module.scss'
import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import Image from 'next/image'
import imgLayer1 from '../../../assets/images/img_emp_1.png'
import imgLayer4 from '../../../assets/images/img_emp_4.png'
import imgLayer5 from '../../../assets/images/img_emp_5.png'
import imgAb1 from '../../../assets/images/Business/img_sec_ab1.png'
import imgAb2 from '../../../assets/images/Business/img_sec_ab2.png'
import imgAb3 from '../../../assets/images/Business/img_sec_ab3.png'

const DigitalSecurity = () => {
     const imgRef1 = useRef(null)
     const imgRef2 = useRef(null)
     const imgRef3 = useRef(null)
     const imgAbRef1 = useRef(null)
     const imgAbRef2 = useRef(null)
     const imgAbRef3 = useRef(null)

     const initialFunc = async () => {
          if (typeof window != 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               if (imgRef1.current) {
                    gsap.fromTo(
                         imgRef1.current,
                         { opacity: 0, y: 100 },
                         {
                              opacity: 1,
                              y: 0,
                              duration: 1,
                              ease: 'power3.out',
                              scrollTrigger: {
                                   trigger: imgRef1.current,
                                   start: 'top 80%',
                                   end: 'bottom 20%',
                                   toggleActions: 'play none none none',
                                   once: true,
                              },
                         },
                    )
               }

               if (imgRef2.current) {
                    gsap.fromTo(
                         imgRef2.current,
                         { opacity: 0, y: 100 },
                         {
                              opacity: 1,
                              y: 0,
                              duration: 1,
                              ease: 'power3.out',
                              delay: 0.2,
                              scrollTrigger: {
                                   trigger: imgRef2.current,
                                   start: 'top 80%',
                                   end: 'bottom 20%',
                                   toggleActions: 'play none none none',
                                   once: true,
                              },
                         },
                    )
               }

               if (imgRef3.current) {
                    gsap.fromTo(
                         imgRef3.current,
                         { opacity: 0, y: 100 },
                         {
                              opacity: 1,
                              y: 0,
                              duration: 1,
                              ease: 'power3.out',
                              delay: 0.4,
                              scrollTrigger: {
                                   trigger: imgRef3.current,
                                   start: 'top 80%',
                                   end: 'bottom 20%',
                                   toggleActions: 'play none none none',
                                   once: true,
                              },
                         },
                    )
               }

               if (imgAbRef1.current) {
                    gsap.fromTo(
                         imgAbRef1.current,
                         { opacity: 0, y: 30 },
                         {
                              opacity: 1,
                              y: 0,
                              duration: 1,
                              ease: 'power3.out',
                              delay: 0.6,
                              scrollTrigger: {
                                   trigger: imgAbRef1.current,
                                   start: 'top 80%',
                                   end: 'bottom 20%',
                                   toggleActions: 'play none none none',
                                   once: true,
                              },
                         },
                    )
               }
               if (imgAbRef2.current) {
                    gsap.fromTo(
                         imgAbRef2.current,
                         { opacity: 0, y: 30 },
                         {
                              opacity: 1,
                              y: 0,
                              duration: 1,
                              ease: 'power3.out',
                              delay: 0.8,
                              scrollTrigger: {
                                   trigger: imgAbRef2.current,
                                   start: 'top 80%',
                                   end: 'bottom 20%',
                                   toggleActions: 'play none none none',
                                   once: true,
                              },
                         },
                    )
               }

               if (imgAbRef3.current) {
                    gsap.fromTo(
                         imgAbRef3.current,
                         { opacity: 0, y: 10 },
                         {
                              opacity: 1,
                              y: 0,
                              duration: 1,
                              ease: 'power3.out',
                              delay: 1,
                              scrollTrigger: {
                                   trigger: imgAbRef3.current,
                                   start: 'top 80%',
                                   end: 'bottom 20%',
                                   toggleActions: 'play none none none',
                                   once: true,
                              },
                         },
                    )
               }
          }
     }

     useEffect(() => {
          initialFunc()
     }, [])

     return (
          <section id='secure-your-digital-assets' className={styles.DigitalSecurity_con}>
               <div className={styles.content_Wrapper}>
                    <div className={styles.image_section}>
                         <div className={styles.img_wrapper_index}>
                              <div className={styles.img_index_top}>
                                   <Image
                                        src={imgLayer1}
                                        ref={imgRef1}
                                        alt='image'
                                        className={styles.img_index}
                                   />
                              </div>
                              <div className={styles.img_index_right}>
                                   <Image
                                        src={imgLayer4}
                                        ref={imgRef2}
                                        alt='image'
                                        className={styles.img_index}
                                   />
                              </div>
                              <div className={styles.img_index_left}>
                                   <Image
                                        src={imgLayer5}
                                        ref={imgRef3}
                                        alt='image'
                                        className={styles.img_index}
                                   />
                              </div>

                              <div className={styles.img_wrapper_absolute}>
                                   <div className={styles.img_top_con}>
                                        <Image
                                             src={imgAb1}
                                             alt='image'
                                             className={styles.img_ab}
                                             ref={imgAbRef1}
                                        />
                                   </div>
                                   <div className={styles.img_left_con}>
                                        <Image
                                             src={imgAb2}
                                             alt='image'
                                             className={styles.img_ab}
                                             ref={imgAbRef2}
                                        />
                                   </div>
                                   <div className={styles.img_right_con}>
                                        <Image
                                             src={imgAb3}
                                             alt='image'
                                             className={styles.img_ab}
                                             ref={imgAbRef3}
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className={styles.details_con}>
                         <TitleDescriptionWithIcon
                              style={{ paddingInline: '0rem' }}
                              title={
                                   <>
                                        <span>Secure</span> Your Digital Assets
                                   </>
                              }
                              description={
                                   'Protect your business with our comprehensive cybersecurity services. We offer vulnerability assessments, risk management frameworks, and robust security measures.'
                              }
                              headingStyle={{ fontSize: '2.625rem', paddingBlockEnd: '1rem' }}
                              paraStyle={{ fontsize: '1.125rem' }}
                         />
                    </div>
               </div>
          </section>
     )
}

export default DigitalSecurity
