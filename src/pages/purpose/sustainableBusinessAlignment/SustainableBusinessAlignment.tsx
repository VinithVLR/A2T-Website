'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './SustainableBusinessAlignment.module.scss'
import Image from 'next/image'
import bg_Image from '../../../assets/images/img_purpose_bg1.png'
import bgImage from '../../../assets/images/img_purpose_bg.png'
import bg_Image2 from '../../../assets/images/img_purp_ly2.png'
import bgImage2 from '../../../assets/images/img_purp_bg2.png'
import bg_Image3 from '../../../assets/images/img_purp_ly2.png'
import bgImage3 from '../../../assets/images/img_purp_bg3.png'

import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const SustainableBusinessAlignment = () => {
     const [isSmallScreen, setIsSmallScreen] = useState(false)

     useEffect(() => {
          const handleResize = () => {
               setIsSmallScreen(window.innerWidth <= 768)
          }

          handleResize()
          window.addEventListener('resize', handleResize)

          return () => {
               window.removeEventListener('resize', handleResize)
          }
     }, [])

     let arr = [
          {
               no: 1,
               image: bg_Image,
               title: 'Alignment with Global Goals',
               bgImage: bgImage,
               description:
                    'Our approach aligns with the UN Sustainable Development Goals (SDGs), focusing on reducing carbon footprints, promoting equality, and fostering responsible growth.',
               bgColor: '#EF402D',
               hoverColor: '#FCE4E1',
          },
          {
               no: 2,
               image: bg_Image2,
               title: 'Empowering Business Leadership',
               bgImage: bgImage2,
               description:
                    'We enable businesses to lead with purpose, combining innovation with sustainable practices to achieve growth responsibly.',
               bgColor: '#A31C44',
               hoverColor: '#F2DFE5',
          },
          {
               no: 3,
               image: bg_Image3,
               title: 'Collaborative Change-Making',
               bgImage: bgImage3,
               description:
                    'Partner with us to drive meaningful change and create a future where innovation and sustainability work hand in hand.',
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
                         <section
                              key={index}
                              className={styles.flex_con}
                              style={{
                                   flexDirection: isSmallScreen
                                        ? index % 2 === 0
                                             ? 'column-reverse'
                                             : 'column'
                                        : 'row',
                              }}
                         >
                              {index % 2 === 0 ? (
                                   <>
                                        <div className={styles.image_con}>
                                             <Image
                                                  src={item.bgImage}
                                                  alt='icon'
                                                  className={styles.image}
                                             />
                                             <div className={styles.img_wrp}>
                                                  <Image
                                                       src={item.image}
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
                                                  src={item.bgImage}
                                                  alt='icon'
                                                  className={styles.image}
                                             />
                                             <div className={styles.img_wrp}>
                                                  <Image
                                                       src={item.image}
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
