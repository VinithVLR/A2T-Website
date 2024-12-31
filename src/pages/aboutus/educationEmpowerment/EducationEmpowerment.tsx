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
import gsap from 'gsap'

const EducationEmpowerment = () => {
     const router = useRouter()
     const imgRef1 = useRef(null)
     const imgRef2 = useRef(null)
     const imgRef3 = useRef(null)
     const imgAbRef1 = useRef(null)
     const imgAbRef2 = useRef(null)
     const imgAbRef3 = useRef(null)
     const imgAbRef4 = useRef(null)

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
                              delay: 0.5,
                              scrollTrigger: {
                                   trigger: imgAbRef1.current,
                                   start: 'top 80%',
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
                              delay: 0.7,
                              scrollTrigger: {
                                   trigger: imgAbRef2.current,
                                   start: 'top 80%',
                                   toggleActions: 'play none none none',
                                   once: true,
                              },
                         },
                    )
               }

               if (imgAbRef3.current) {
                    gsap.fromTo(
                         imgAbRef3.current,
                         { opacity: 0, y: 5 },
                         {
                              opacity: 1,
                              y: 0,
                              duration: 1,
                              ease: 'power3.out',
                              delay: 0.9,
                              scrollTrigger: {
                                   trigger: imgAbRef3.current,
                                   start: 'top 80%',
                                   toggleActions: 'play none none none',
                                   once: true,
                              },
                         },
                    )
               }

               if (imgAbRef4.current) {
                    gsap.fromTo(
                         imgAbRef4.current,
                         { opacity: 0, y: 10 },
                         {
                              opacity: 1,
                              y: 0,
                              duration: 1,
                              ease: 'power3.out',
                              delay: 1,
                              scrollTrigger: {
                                   trigger: imgAbRef4.current,
                                   start: 'top 80%',
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
          <section className={styles.eduction_con}>
               <div className={styles.content_Wrapper}>
                    <div className={styles.details_con}>
                         <Button
                              label={'The Padikkal Foundation'}
                              disabled={false}
                              style={{
                                   height: '2rem',
                                   backgroundColor: '#0E7B68',
                                   gap: '1rem',
                                   marginBlock: '2rem',
                              }}
                              loading={false}
                              labestyle={{ marginLeft: '0px', fontSize: '0.9rem' }}
                         />
                         <TitleDescriptionWithIcon
                              style={{ paddingInline: '0rem' }}
                              title={'Empowering Dreams Through Education'}
                              description={
                                   'The Padikkal Foundation is dedicated to empowering underprivileged individuals by providing access to quality education and professional training. We help aspiring talents pursue their desired careers by connecting them with renowned institutes, ensuring they receive the skills and opportunities needed for a brighter future.'
                              }
                              paraStyle={{
                                   fontSize: '1rem',
                                   paddingInlineEnd: '3rem',
                              }}
                         />
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
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default EducationEmpowerment
