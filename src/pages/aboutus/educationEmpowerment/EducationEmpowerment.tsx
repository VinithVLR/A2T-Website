'use client'
import { useEffect, useRef } from 'react'
import styles from './EducationEmpowerment.module.scss'
import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import Button from '@/component/button/Button'
import imgLayer1 from '../../../assets/images/img_emp_1.png'
import imgLayer2 from '../../../assets/images/img_emp_2.png'
import imgLayer3 from '../../../assets/images/img_emp_3.png'
import imgLayer4 from '../../../assets/images/img_emp_4.png'
import imgLayer5 from '../../../assets/images/img_emp_5.png'
import imgLayer6 from '../../../assets/images/img_emp_6.png'
import imgLayer7 from '../../../assets/images/img_emp_7.png'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const EducationEmpowerment = () => {
     const router = useRouter()
     const imgRef1 = useRef(null)
     const imgRef2 = useRef(null)
     const imgRef3 = useRef(null)
     const imgAbRef1 = useRef(null)
     const imgAbRef2 = useRef(null)
     const imgAbRef3 = useRef(null)
     const imgAbRef4 = useRef(null)
     const abtextLeft = useRef(null)
     const abtextRight = useRef(null)
     const labelRef = useRef(null)
     const btnRef = useRef(null)
     const initialFunc = async () => {
          if (typeof window != 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               if (imgRef1.current && imgRef2.current && imgRef3.current) {
                    const timeline = gsap.timeline({
                         scrollTrigger: {
                              trigger: imgRef1.current, // Use imgRef1 as the trigger
                              start: 'top 80%',
                              end: 'bottom 20%',
                              toggleActions: 'play none none none',
                              once: true,
                         },
                    })

                    timeline
                         .fromTo(
                              imgRef1.current,
                              { opacity: 0, y: 100 },
                              { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
                         )
                         .fromTo(
                              imgRef2.current,
                              { opacity: 0, y: 100 },
                              { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
                         )
                         .fromTo(
                              imgRef3.current,
                              { opacity: 0, y: 100 },
                              { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
                         )
               }
               if (
                    imgAbRef1.current &&
                    imgAbRef2.current &&
                    imgAbRef3.current &&
                    imgAbRef4.current
               ) {
                    const timeline = gsap.timeline({
                         scrollTrigger: {
                              trigger: imgAbRef1.current,
                              start: 'top 90%',
                              end: 'bottom 20%',
                              toggleActions: 'play none none none',
                              once: true,
                         },
                    })

                    timeline
                         .fromTo(
                              imgAbRef1.current,
                              { opacity: 0, x: -40 },
                              { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', delay: 0.6 },
                         )
                         .fromTo(
                              imgAbRef2.current,
                              { opacity: 0, x: 40 },
                              { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
                              '-=0.3',
                         )
                         .fromTo(
                              imgAbRef3.current,
                              { opacity: 0, x: -40 },
                              { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
                              '-=0.3',
                         )
                         .fromTo(
                              imgAbRef4.current,
                              { opacity: 0, x: 40 },
                              { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
                              '-=0.3',
                         )
               }
               if (abtextLeft.current && abtextRight.current) {
                    const timeline = gsap.timeline({
                         scrollTrigger: {
                              trigger: abtextLeft.current,
                              start: 'top 100%',
                              end: 'bottom 20%',
                              toggleActions: 'play none none none',
                              once: true,
                         },
                    })

                    timeline
                         .fromTo(
                              abtextLeft.current,
                              { opacity: 0, scale: 0.9 },
                              {
                                   opacity: 1,
                                   scale: 1,
                                   duration: 1,
                                   delay: 1,
                                   ease: 'power3.out',
                              },
                         )
                         .fromTo(
                              abtextRight.current,
                              { opacity: 0, scale: 0.9 },
                              { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' },
                         )
               }

               const timeline = gsap.timeline({
                    scrollTrigger: {
                         trigger: labelRef.current,
                         start: 'top 80%',
                         end: 'bottom 20%',
                         toggleActions: 'play none none none',
                    },
               })
               timeline
                    .fromTo(
                         labelRef.current,
                         { y: '80%', opacity: 0 },
                         { y: '0%', opacity: 1, duration: 0.8, ease: 'power2.out' },
                    )
                    .fromTo(
                         btnRef.current,
                         { y: '80%', opacity: 0 },
                         { y: '0%', opacity: 1, duration: 0.8, ease: 'power2.out' },
                         '<',
                    )
          }
     }

     useEffect(() => {
          initialFunc()
     }, [])

     return (
          <section className={styles.eduction_con}>
               <div className={styles.content_Wrapper}>
                    <div className={styles.details_con}>
                         <div
                              ref={labelRef}
                              style={{
                                   height: 'auto',
                                   width: 'fit-content',
                                   backgroundColor: '#0E7B68',
                                   color: '#fff',
                                   paddingInline: '1rem',
                                   paddingBlock: '0.5rem',
                                   borderRadius: '20px',
                              }}
                         >
                              The Padikkal Foundation
                         </div>
                         <TitleDescriptionWithIcon
                              style={{ paddingInline: '0rem' }}
                              title={'Empowering Dreams Through Education'}
                              description={
                                   'The Padikkal Foundation is dedicated to empowering underprivileged individuals by providing access to quality education and professional training. We help aspiring talents pursue their desired careers by connecting them with renowned institutes, ensuring they receive the skills and opportunities needed for a brighter future.'
                              }
                              triggerKey={'top 100%'}
                              paraStyle={{
                                   fontSize: '1rem',
                                   paddingInlineEnd: '3rem',
                              }}
                         />
                         <div ref={btnRef}>
                              <Button
                                   label='Explore our Purpose'
                                   disabled={false}
                                   icon
                                   style={{
                                        height: '3rem',
                                        backgroundColor: '#0E7B68',
                                        gap: '1rem',
                                        borderRadius: '7px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBlock: '2rem',
                                   }}
                                   loading={false}
                                   labestyle={{
                                        marginLeft: '0px',
                                        fontSize: '1.125rem',
                                        color: '#fff',
                                        fontWeight: '400',
                                   }}
                                   onClick={() => {
                                        router.push('/purpose')
                                   }}
                              />
                         </div>
                    </div>
                    <div className={styles.image_section}>
                         <div className={styles.img_wrapper_index}>
                              <div className={styles.img_index_top}>
                                   <Image
                                        src={imgLayer1}
                                        alt='img'
                                        ref={imgRef1}
                                        className={styles.img_index}
                                   />
                              </div>
                              <div className={styles.img_index_right}>
                                   <Image
                                        src={imgLayer4}
                                        alt='image'
                                        ref={imgRef2}
                                        className={styles.img_index}
                                   />
                              </div>
                              <div className={styles.img_index_left}>
                                   <Image
                                        ref={imgRef3}
                                        src={imgLayer5}
                                        alt='image'
                                        className={styles.img_index}
                                   />
                              </div>
                              <div className={styles.img_wrapper_absolute}>
                                   <div className={styles.img_top_con}>
                                        <Image
                                             ref={imgAbRef1}
                                             src={imgLayer2}
                                             alt='image'
                                             className={styles.img_ab}
                                        />
                                   </div>
                                   <div className={styles.img_right_con}>
                                        <Image
                                             ref={imgAbRef2}
                                             src={imgLayer3}
                                             alt='image'
                                             className={styles.img_ab}
                                        />
                                   </div>
                                   <div className={styles.img_left_con}>
                                        <Image
                                             ref={imgAbRef3}
                                             src={imgLayer6}
                                             alt='image'
                                             className={styles.img_ab}
                                        />
                                   </div>
                                   <div className={styles.img_bottom_con}>
                                        <Image
                                             ref={imgAbRef4}
                                             src={imgLayer7}
                                             alt='image'
                                             className={styles.img_ab}
                                        />
                                   </div>
                                   <h4 className={styles.text_left} ref={abtextLeft}>
                                        PADIKKAL
                                   </h4>
                                   <h4 className={styles.text_right} ref={abtextRight}>
                                        FOUNDATION
                                   </h4>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default EducationEmpowerment
