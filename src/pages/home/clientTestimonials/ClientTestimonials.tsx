'use client'

import React, { useEffect, useState } from 'react'
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

interface FleetCardData {
     bgImage: string
     iconImage: any
     title: string
     des: string
     overLayer: string
     titleColor: string
     desColor: string
}
const ClientTestimonials = () => {
     const [index, setIndex] = useState(1)
     const [maxIndex, setMaxIndex] = useState(3)
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

     useEffect(() => {
          if (typeof window != 'undefined') {
               if (window.innerWidth >= 970) {
                    setMaxIndex(3)
               } else if (window.innerWidth > 700 && window.innerWidth <= 500) {
                    setMaxIndex(4)
               } else if (window.innerWidth < 500) {
                    setMaxIndex(8)
               }
          }
     }, [])

     return (
          <section className={styles.main_container}>
               <Header
                    title='Hear What Our Clients Say'
                    titleStyle={{ width: '30%', paddingBlock: '2rem' }}
               />
               <div className={styles.wrapper}>
                    <div
                         className={styles.flexContainer}
                         style={{
                              transform: `translateX(-${(index - 1) * 100}%)`,
                              transition: 'all 1.5s ease',
                         }}
                    >
                         {arr.map((data: any, index: any) => (
                              <CarousCard key={data.title} indexNumber={index} item={data} />
                         ))}
                    </div>
               </div>

               <div>
                    <div className={styles.pagination}>
                         <Image
                              src={prevIcon}
                              alt=''
                              onClick={() => {
                                   if (index > 1) {
                                        setIndex(index - 1)
                                   }
                              }}
                              className={styles.navBtn}
                         />
                         <div className={styles.bar}>
                              <div
                                   className={styles.filler}
                                   style={{
                                        width: `${(index / maxIndex) * 100}%`,
                                   }}
                              ></div>
                         </div>
                         <Image
                              src={prevIcon}
                              alt=''
                              onClick={() => {
                                   if (index < maxIndex) {
                                        setIndex(index + 1)
                                   }
                              }}
                              className={styles.navBtn}
                              style={{ transform: 'rotateY(180deg)' }}
                         />
                    </div>
               </div>
          </section>
     )
}

export default ClientTestimonials
