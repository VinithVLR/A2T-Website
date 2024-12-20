'use client'

import React, { useEffect } from 'react'
import styles from './WhyA2T.module.scss'
import Header from '@/component/header/Header'
import innovative from '../../../assets/icons/ic_innovative_env.svg'
import diversity from '../../../assets/icons/ic_diversity.svg'
import impactfull from '../../../assets/icons/ic_impactfull_work.svg'
import career from '../../../assets/icons/ic_career_growth.svg'
import innovativeImg from '../../../assets/images/img_innovative.png'
import diversityImg from '../../../assets/images/img_diversity.png'
import impactfulImg from '../../../assets/images/img_impactful.png'
import careerImg from '../../../assets/images/img_career.png'
import gsap from 'gsap'
import Image from 'next/image'

function WhyA2T() {
     const values = [
          {
               id: 'innovative',
               title: 'Innovative Environment',
               description:
                    'Work in an environment that encourages creativity, innovation, and continuous learning. We are committed to staying at the forefront of industry trends, and we provide our employees with the tools and opportunities they need to succeed.',
               icon: innovative,
               background: innovativeImg,
               alt: 'Team collaborating around a table',
          },
          {
               id: 'diversity',
               title: 'Diversity & Inclusion',
               description:
                    'At A2 Technologies, we celebrate diversity and are committed to creating an inclusive workplace where everyone feels valued and respected. We believe that diverse teams drive innovation and are key to our success.',
               icon: diversity,
               background: diversityImg,
               alt: 'Hands reaching towards each other',
          },
          {
               id: 'impactufull',
               title: 'Impactful Work',
               description:
                    'Contribute to projects that make a difference. Our work in engineering, sustainability, and workforce solutions impacts industries and communities around the world. Be part of something bigger at A2 Technologies.',
               icon: impactfull,
               background: impactfulImg,
               alt: 'Sparks flying from industrial work',
          },
          {
               id: 'career',
               title: 'Career Growth',
               description:
                    'Contribute to projects that make a difference. Our work in engineering, sustainability, and workforce solutions impacts industries and communities around the world. Be part of something bigger at A2 Technologies.',
               icon: career,
               background: careerImg,
               alt: 'Plant with green leaves growing',
          },
     ]

     const onMouseEnter = (id: string, pId: string) => {
          let t1 = gsap.timeline()
          t1.to(
               `#${pId}`,
               {
                    height: 'auto',
                    duration: 0.5,
               },
               0,
          ).to(
               `#${id}`,
               {
                    height: 'auto',
                    duration: 0.5,
               },
               0,
          )
     }

     const onMouseLeave = (id: string, pId: string) => {
          let t1 = gsap.timeline()
          t1.to(
               `#${pId}`,
               {
                    height: '0px',
                    duration: 0.5,
               },
               0,
          ).to(
               `#${id}`,
               {
                    height: '0px',
                    duration: 0.5,
               },
               0,
          )
     }

     return (
          <section className={styles.mainContainer}>
               <Header title={'Why Choose A2 Technologies?'} titleStyle={{ width: '65%' }} />

               <div className={styles.valuesGrid}>
                    {values.map((value, index) => (
                         <div
                              key={index}
                              className={styles.valueCard}
                              style={{
                                   backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 25%, transparent), url(${value.background.src})`,
                              }}
                         >
                              <div
                                   className={styles.overlay}
                                   onMouseEnter={() =>
                                        onMouseEnter(`cardIcon${value.id}`, `para${value.id}`)
                                   }
                                   onMouseLeave={() =>
                                        onMouseLeave(`cardIcon${value.id}`, `para${value.id}`)
                                   }
                              >
                                   <div className={styles.imgWrapper} id={`cardIcon${value.id}`}>
                                        <Image src={value.icon} alt='' className='icon' />
                                   </div>

                                   <h3>{value.title}</h3>
                                   <div className={styles.imgWrapper} id={`para${value.id}`}>
                                        <p>{value.description}</p>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
          </section>
     )
}

export default WhyA2T
