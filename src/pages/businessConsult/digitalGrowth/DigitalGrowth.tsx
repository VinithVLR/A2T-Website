'use client'
import { useEffect, useRef } from 'react'
import styles from './DigitalGrowth.module.scss'
import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import Image from 'next/image'
import imgLayer1 from '../../../assets/images/img_emp_1.png'
import imgLayer4 from '../../../assets/images/img_emp_4.png'
import imgLayer5 from '../../../assets/images/img_emp_5.png'
import imgAb1 from '../../../assets/images/Business/img_buz_ab1.png'
import imgAb2 from '../../../assets/images/Business/img_buz_ab2.png'
import imgAb3 from '../../../assets/images/Business/img_buz_ab3.png'

const DigitalGrowth = () => {
     const imgRef1 = useRef(null)
     const imgRef2 = useRef(null)
     const imgRef3 = useRef(null)
     const imgAbRef1 = useRef(null)
     const imgAbRef2 = useRef(null)
     const imgAbRef3 = useRef(null)

     const initialFunc = async () => {
          if (typeof window !== 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)

               if (imgRef1.current && imgRef2.current && imgRef3.current) {
                    const timeline = gsap.timeline({
                         scrollTrigger: {
                              trigger: imgRef1.current,
                              start: 'top 80%',
                              toggleActions: 'play none none none',
                              once: true,
                         },
                    })

                    timeline
                         .fromTo(
                              imgRef1.current,
                              { opacity: 0, y: 100 },
                              { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
                         )
                         .fromTo(
                              imgRef2.current,
                              { opacity: 0, y: 100 },
                              { opacity: 1, y: 0, delay: 0.2, duration: 0.5, ease: 'power3.out' },
                              '-=0.3',
                         )
                         .fromTo(
                              imgRef3.current,
                              { opacity: 0, y: 100 },
                              { opacity: 1, y: 0, delay: 0.3, duration: 0.5, ease: 'power3.out' },
                              '-=0.3',
                         )
               }

               if (imgAbRef1.current && imgAbRef2.current && imgAbRef3.current) {
                    const timeline = gsap.timeline({
                         scrollTrigger: {
                              trigger: imgAbRef1.current,
                              start: 'top 100%',
                              end: 'bottom 20%',
                              toggleActions: 'play none none none',
                              once: true,
                         },
                    })

                    timeline
                         .fromTo(
                              imgAbRef1.current,
                              { opacity: 0, y: 30 },
                              { opacity: 1, y: 0, delay: 0.8, duration: 0.6, ease: 'power3.out' },
                         )
                         .fromTo(
                              imgAbRef2.current,
                              { opacity: 0, y: 30 },
                              { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
                              '-=0.3',
                         )
                         .fromTo(
                              imgAbRef3.current,
                              { opacity: 0, y: 10 },
                              { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
                              '-=0.3',
                         )
               }
          }
     }

     useEffect(() => {
          initialFunc()
     }, [])
     return (
          <section id='drive-growth' className={styles.DigitalGrowth_con}>
               <div className={styles.content_Wrapper}>
                    <div className={styles.details_con}>
                         <TitleDescriptionWithIcon
                              style={{ paddingInline: '0rem' }}
                              title={
                                   <>
                                        <span>Drive Growth</span> with Strategic Digital
                                        Transformation
                                   </>
                              }
                              triggerKey={'top 100%'}
                              description={
                                   'We offer process consultancy services to enhance operational efficiency using IT tools like data analytics, process automation, and ERP systems. Our goal is to simplify workflows, reduce costs, and improve productivity.'
                              }
                              headingStyle={{ fontSize: '2.625rem', paddingBlockEnd: '1rem' }}
                              paraStyle={{ fontsize: '1.125rem' }}
                         />
                    </div>
                    <div className={styles.image_section}>
                         <div className={styles.img_wrapper_index}>
                              <div className={styles.img_index_top}>
                                   <Image
                                        ref={imgRef1}
                                        src={imgLayer1}
                                        alt='Image 1'
                                        className={styles.img_index}
                                   />
                              </div>
                              <div className={styles.img_index_right}>
                                   <Image
                                        ref={imgRef2}
                                        src={imgLayer4}
                                        alt='Image 4'
                                        className={styles.img_index}
                                   />
                              </div>
                              <div className={styles.img_index_left}>
                                   <Image
                                        ref={imgRef3}
                                        src={imgLayer5}
                                        alt='Image 5'
                                        className={styles.img_index}
                                   />
                              </div>

                              <div className={styles.img_wrapper_absolute}>
                                   <div className={styles.img_top_con}>
                                        <Image
                                             ref={imgAbRef1}
                                             src={imgAb1}
                                             alt='Image 1'
                                             className={styles.img_ab}
                                        />
                                   </div>
                                   <div className={styles.img_left_con}>
                                        <Image
                                             ref={imgAbRef2}
                                             src={imgAb2}
                                             alt='Image 2'
                                             className={styles.img_ab}
                                        />
                                   </div>
                                   <div className={styles.img_right_con}>
                                        <Image
                                             ref={imgAbRef3}
                                             src={imgAb3}
                                             alt='Image 3'
                                             className={styles.img_ab}
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default DigitalGrowth
