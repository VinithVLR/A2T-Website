'use client'

import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from './ClientTestimonials.module.scss'
import Header from '@/component/header/Header'
import bg_image from '../../../assets/images/pexel.jpeg'
import Image from 'next/image'
import iconMan from '../../../assets/icons/ic_manpower.png'
import CarousCard from '../component/carousCard/CarousCard'
import prevIcon from '../../../assets/icons/ic_prev.svg'
import willaimRicker from '../../../assets/images/img_willaim_riker.svg'
import janeSmith from '../../../assets/images/img_jane_smith.svg'
import tomWillaims from '../../../assets/images/img_tom_willaims.svg'
import michaelBrow from '../../../assets/images/img_michael_brow.svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

const ClientTestimonials = () => {
     const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null)
     const [activeNum, setActive] = useState(4)
     const [maxIndex, setMaxIndex] = useState(4)
     let arr: any = [
          {
               position: 'Head of SEO Banca Sella',
               profileImg: janeSmith,
               name: 'Jane Smith',

               quote: 'A2 Technologies provided exceptional manpower and engineering services. Their expertise helped us streamline operations and improve efficiency.',
          },
          {
               position: 'Software developer',
               profileImg: tomWillaims,
               name: 'Tom Williams',
               quote: 'The sustainability solutions from A2 have transformed our energy practices, significantly reducing our carbon footprint.',
          },
          {
               position: 'Online Entrepreneur',
               profileImg: michaelBrow,
               name: 'Michael Brow',
               quote: 'Their consulting team delivered actionable insights that truly accelerated our business growth. Highly recommended!',
          },
          {
               position: 'CEO at BOSCH',
               profileImg: willaimRicker,
               name: 'William  Riker',
               quote: 'Fleet management has never been smoother. A2’s solutions ensured seamless operations and optimized logistics for our company.',
          },
          {
               position: 'Head of SEO Banca Sella',
               profileImg: janeSmith,
               name: 'Jane Smith',

               quote: 'A2 Technologies provided exceptional manpower and engineering services. Their expertise helped us streamline operations and improve efficiency.',
          },
          {
               position: 'Software developer',
               profileImg: tomWillaims,
               name: 'Tom Williams',
               quote: 'The sustainability solutions from A2 have transformed our energy practices, significantly reducing our carbon footprint.',
          },
          {
               position: 'Online Entrepreneur',
               profileImg: michaelBrow,
               name: 'Michael Brow',
               quote: 'Their consulting team delivered actionable insights that truly accelerated our business growth. Highly recommended!',
          },
          {
               position: 'CEO at BOSCH',
               profileImg: willaimRicker,
               name: 'William  Riker',
               quote: 'Fleet management has never been smoother. A2’s solutions ensured seamless operations and optimized logistics for our company.',
          },
          {
               position: 'Head of SEO Banca Sella',
               profileImg: janeSmith,
               name: 'Jane Smith',

               quote: 'A2 Technologies provided exceptional manpower and engineering services. Their expertise helped us streamline operations and improve efficiency.',
          },
          {
               position: 'Software developer',
               profileImg: tomWillaims,
               name: 'Tom Williams',
               quote: 'The sustainability solutions from A2 have transformed our energy practices, significantly reducing our carbon footprint.',
          },
          {
               position: 'Online Entrepreneur',
               profileImg: michaelBrow,
               name: 'Michael Brow',
               quote: 'Their consulting team delivered actionable insights that truly accelerated our business growth. Highly recommended!',
          },
          {
               position: 'CEO at BOSCH',
               profileImg: willaimRicker,
               name: 'William  Riker',
               quote: 'Fleet management has never been smoother. A2’s solutions ensured seamless operations and optimized logistics for our company.',
          },
     ]

     useLayoutEffect(() => {
          if (typeof window != 'undefined') {
               const handleResize = () => {
                    if (window.innerWidth >= 970) {
                         setMaxIndex(4)
                         setActive(4)
                    } else if (window.innerWidth < 970 && window.innerWidth >= 650) {
                         setMaxIndex(3)
                         setActive(3)
                    } else if (window.innerWidth < 650 && window.innerWidth >= 500) {
                         setMaxIndex(2)
                         setActive(2)
                    } else if (window.innerWidth < 500) {
                         setMaxIndex(1)
                         setActive(1)
                    }
               }

               handleResize()
               window.addEventListener('resize', handleResize)
               return () => window.removeEventListener('resize', handleResize)
          }
     }, [])

     return (
          <section className={styles.main_container}>
               <Header
                    title='Hear What Our Clients Say'
                    titleStyle={{ width: '30%', paddingBlockEnd: '2rem' }}
               />
               <div className={styles.wrapper}>
                    <Swiper
                         spaceBetween={20}
                         slidesPerView={maxIndex}
                         style={{ height: '100%', overflow: 'initial' }}
                         onSwiper={(swiper) => {
                              setSwiperRef(swiper)
                         }}
                         onSlideChange={(swiper) => {
                              setActive(swiper.activeIndex + maxIndex)
                         }}
                    >
                         {arr.map((data: any, index: any) => (
                              <SwiperSlide key={index}>
                                   <CarousCard indexNumber={index} item={data} />
                              </SwiperSlide>
                         ))}
                    </Swiper>
               </div>

               <div>
                    <div className={styles.pagination}>
                         <Image
                              src={prevIcon}
                              alt='Previous'
                              onClick={() => swiperRef?.slidePrev()}
                              className={styles.navBtn}
                         />
                         <div className={styles.bar}>
                              <div
                                   className={styles.filler}
                                   style={
                                        {
                                             width: `${(activeNum / 12) * 100}%`,
                                        } as React.CSSProperties
                                   }
                              >
                                   <span className={styles.counter}>
                                        {activeNum} / {12}
                                   </span>
                              </div>
                         </div>
                         <Image
                              src={prevIcon}
                              alt='Next'
                              onClick={() => swiperRef?.slideNext()}
                              className={styles.navBtn}
                              style={{ transform: 'rotateY(180deg)' }}
                         />
                    </div>
               </div>
          </section>
     )
}

export default ClientTestimonials
