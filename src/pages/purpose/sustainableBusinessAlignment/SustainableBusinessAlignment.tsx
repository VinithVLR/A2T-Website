'use client'
import React, { useEffect, useRef } from 'react'
import styles from './SustainableBusinessAlignment.module.scss'
import Image from 'next/image'
import Consumption from '@/component/consumption/Consumption'
import bg_Image from '../../../assets/images/img_purpose_bg1.png'
import bgImage from '../../../assets/images/img_purpose_bg.png'

import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const SustainableBusinessAlignment = () => {
     let arr = [
          {
               no: 1,
               // image: img_gender,
               title: 'Alignment with Global Goals',
               description:
                    'Our approach aligns with the UN Sustainable Development Goals (SDGs), focusing on reducing carbon footprints, promoting equality, and fostering responsible growth.',
               target: [],
               bgColor: '#EF402D',
               hoverColor: '#FCE4E1',
          },
          {
               no: 2,
               // image: img_decentWork,
               title: 'Empowering Business Leadership',
               description:
                    'We enable businesses to lead with purpose, combining innovation with sustainable practices to achieve growth responsibly.',
               target: [],
               bgColor: '#A31C44',
               hoverColor: '#F2DFE5',
          },
          {
               no: 3,
               // image: img_industry,
               title: 'Collaborative Change-Making',
               description:
                    'Partner with us to drive meaningful change and create a future where innovation and sustainability work hand in hand.',
               target: [],
               bgColor: '#F26A2E',
               hoverColor: '#FDEAE1',
          },
     ]

     const lineRef = useRef<HTMLDivElement>(null)

     useEffect(() => {
          const lines = lineRef.current?.querySelectorAll(`.${styles.line}`)

          if (lines) {
               lines.forEach((line) => {
                    gsap.fromTo(
                         line,
                         { height: '0%' }, // Start with no height
                         {
                              height: '100%', // Animate to full height
                              duration: 1.5,
                              ease: 'power2.out',
                              scrollTrigger: {
                                   trigger: line, // Animate each line when it enters the viewport
                                   start: 'top 80%', // Animation starts when the line enters 80% of the viewport
                                   end: 'bottom 20%', // Animation ends when the line leaves 20% of the viewport
                                   scrub: true, // Smooth animation synced with scroll
                              },
                         },
                    )
               })
          }
     }, [])

     return (
          <section className={styles.main_container}>
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         Aligning Business Success with Environmental Responsibility
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         From reducing carbon footprints to fostering equality and promoting
                         responsible growth, we align our services with the UN's Sustainable
                         Development Goals.
                    </p>
               </header>

               <div ref={lineRef} className={styles.svglinecontainer_web}>
                    {arr.map((item: any, index: any) => (
                         <section key={index} className={styles.flex_con}>
                              {index % 2 === 0 ? (
                                   <>
                                        <div className={styles.image_con}>
                                             <Image
                                                  src={bgImage}
                                                  alt='icon'
                                                  className={styles.image}
                                             />
                                             <div className={styles.img_wrp}>
                                                  <Image
                                                       src={bg_Image}
                                                       alt='icon'
                                                       className={styles.image}
                                                  />
                                             </div>
                                        </div>
                                        <div className={styles.details_con}>
                                             <TitleDescriptionWithIcon
                                                  style={{ paddingInline: '3rem' }}
                                                  title={item.title}
                                                  description={item.description}
                                                  headingStyle={{ fontSize: '2rem' }}
                                                  paraStyle={{
                                                       fontsize: '1.125rem',
                                                       lineHeight: '1.3rem',
                                                       width: '60%',
                                                  }}
                                             />
                                        </div>
                                   </>
                              ) : (
                                   <>
                                        <div className={styles.details_con}>
                                             <TitleDescriptionWithIcon
                                                  style={{ paddingInline: '0rem' }}
                                                  title={item.title}
                                                  description={item.description}
                                                  headingStyle={{ fontSize: '2rem' }}
                                                  paraStyle={{
                                                       fontsize: '1.125rem',
                                                       lineHeight: '1.3rem',
                                                       width: '60%',
                                                  }}
                                             />
                                        </div>
                                        <div className={styles.image_con}>
                                             <Image
                                                  src={bgImage}
                                                  alt='icon'
                                                  className={styles.image}
                                             />
                                             <div className={styles.img_wrp}>
                                                  <Image
                                                       src={bg_Image}
                                                       alt='icon'
                                                       className={styles.image}
                                                  />
                                             </div>
                                        </div>
                                   </>
                              )}
                              <div className={styles.line}></div>
                         </section>
                    ))}
               </div>
          </section>
     )
}

export default SustainableBusinessAlignment
