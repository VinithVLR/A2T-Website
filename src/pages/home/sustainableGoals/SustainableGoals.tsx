'use client'

import styles from './SustainableGoals.module.scss'
import Header from '@/component/header/Header'
import Image from 'next/image'
import ic_gender from '../../../assets/icons/ic_gender.svg'
import ic_decentWork from '../../../assets/icons/ic_decent.svg'
import ic_inequal from '../../../assets/icons/ic_inequal.svg'
import ic_com_product from '../../../assets/icons/ic_com_product.svg'
import ic_climate from '../../../assets/icons/ic_climate.svg'
import ic_industry from '../../../assets/icons/ic_industry.svg'
import ic_institutions from '../../../assets/icons/ic_institutions.svg'
import Consumption from '@/component/consumption/Consumption'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import React from 'react'

import genderCard from '../../../assets/images/sustainableGoals/img_gender_equality.png'
import genderCanva from '../../../assets/images/sustainableGoals/canva_cont_gender_equality.png'

import workGrowthCard from '../../../assets/images/sustainableGoals/img_work_growth.png'
import workGrowthCanva from '../../../assets/images/sustainableGoals/canva_work_growth.png'

import innovationCard from '../../../assets/images/sustainableGoals/img_innnovatio_infrastructure.png'
import innovationCanva from '../../../assets/images/sustainableGoals/canva_innnovatio_infrastructure.png'

import inequalitiesCard from '../../../assets/images/sustainableGoals/img_inequalities.png'
import inequalitiesCanva from '../../../assets/images/sustainableGoals/canva_inequalities.png'

import consumptionCard from '../../../assets/images/sustainableGoals/img_consumption_production.png'
import consumptionCanva from '../../../assets/images/sustainableGoals/canva_consumption_production.png'

import climateCard from '../../../assets/images/sustainableGoals/img_climate_action.png'
import climateCanva from '../../../assets/images/sustainableGoals/canva_climate_action.png'

import strongCard from '../../../assets/images/sustainableGoals/img_strong_institutions.png'
import strongCanva from '../../../assets/images/sustainableGoals/canva_strong_institutions.png'

function SustainableGoals() {
     const arr = [
          {
               no: 1,
               icon: ic_gender,
               title: 'Gender Equality',
               description:
                    'Promoting equal opportunities and empowering all genders within the workplace and beyond.',
               target: [],
               bgColor: '#EF402D',
               hoverColor: '#FCE4E1',
               cardImg: genderCard,
               canva: genderCanva,
          },
          {
               no: 2,
               icon: ic_decentWork,
               title: 'Decent Work & Economic Growth',
               description:
                    'Ensuring inclusive and sustainable economic growth by creating safe, productive work environments.',
               target: [],
               bgColor: '#A31C44',
               hoverColor: '#F2DFE5',
               cardImg: workGrowthCard,
               canva: workGrowthCanva,
          },
          {
               no: 3,
               icon: ic_industry,
               title: 'Industry, innovation and infrastructure',
               description:
                    'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.',
               target: [],
               bgColor: '#F26A2E',
               hoverColor: '#FDEAE1',
               cardImg: innovationCard,
               canva: innovationCanva,
          },
          {
               no: 4,
               icon: ic_inequal,
               title: 'Reduced Inequalities',
               description:
                    'Working to reduce disparities by fostering diversity, equity, and inclusion in every aspect of our business.',
               target: [],
               bgColor: '#E01483',
               hoverColor: '#FADEED',
               cardImg: inequalitiesCard,
               canva: inequalitiesCanva,
          },
          {
               no: 5,
               icon: ic_com_product,
               title: 'Responsible Consumption & Production',
               description:
                    'Committing to sustainable practices that reduce waste and promote responsible resource management.',
               target: [],
               bgColor: '#BF8D2C',
               hoverColor: '#F6EFE1',
               cardImg: consumptionCard,
               canva: consumptionCanva,
          },
          {
               no: 6,
               icon: ic_climate,
               title: 'Climate action',
               description: 'Take urgent action to combat climatic change and its impacts.',
               target: [],
               bgColor: '#407F46',
               hoverColor: '#E4EDE5',
               cardImg: climateCard,
               canva: climateCanva,
          },
          {
               no: 7,
               icon: ic_institutions,
               title: 'Peace, Justice, & Strong Institutions',
               description:
                    'Supporting strong, transparent institutions and promoting justice and peace for sustainable development.',
               target: [],
               bgColor: '#136A9F',
               hoverColor: '#DEEAF1',
               cardImg: strongCard,
               canva: strongCanva,
          },
     ]
     const [windowWidth, setWindowWidth] = useState(0)
     const lineHeightValue = useRef(0)
     const dotsRefs = useRef<HTMLDivElement[]>([])
     const imageSectionRefs = useRef<HTMLDivElement[]>([])
     const detailsContentRefs = useRef<HTMLDivElement[]>([])

     useLayoutEffect(() => {
          if (typeof window != 'undefined') {
               const handleResize = () => {
                    setWindowWidth(window.innerWidth)
                    const desktopLine = document.querySelector('.desktop-line')
                    if (desktopLine) {
                         const rect = desktopLine.getBoundingClientRect()
                         lineHeightValue.current = rect.height
                    }
               }
               handleResize()
               window.addEventListener('resize', handleResize)
               return () => window.removeEventListener('resize', handleResize)
          }
     }, [])

     const initial = async () => {
          const { gsap } = await import('gsap')
          const { ScrollTrigger } = await import('gsap/ScrollTrigger')
          gsap.registerPlugin(ScrollTrigger)

          // console.log('dot elements list', dots)
          arr.forEach((each, index) => {
               const dot = dotsRefs.current[index]
               const detailsContainer = detailsContentRefs.current[index]
               const imageContainer = imageSectionRefs.current[index]

               if (!detailsContainer) return

               ScrollTrigger.create({
                    trigger: dotsRefs.current[index],
                    start: 'top center+=100',
                    toggleClass: {
                         targets: dot,
                         className: styles.appear,
                    },
                    toggleActions: 'play reverse play reverse',
               })

               const timeline = gsap.timeline({
                    scrollTrigger: {
                         trigger: dot,
                         start: 'top center+=100',
                         toggleActions: 'play none none reverse',
                    },
               })

               timeline
                    .from(dot, {
                         duration: 0.5,
                         ease: 'back.out(1.7)',
                    })
                    .from(
                         [detailsContainer, imageContainer],
                         {
                              y: 50,
                              opacity: 0,
                              duration: 0.8,
                              ease: 'power2.out',
                              stagger: 0,
                         },
                         0,
                    )

               const nextLine = dot.nextElementSibling
               if (nextLine && nextLine.classList.contains(styles.line)) {
                    const nextDot = dotsRefs.current[index + 1]

                    if (nextDot) {
                         gsap.timeline({
                              scrollTrigger: {
                                   trigger: dot,
                                   start: 'center center',
                                   endTrigger: nextDot,
                                   end: 'top center+=100',
                                   scrub: 1,
                              },
                         }).fromTo(
                              nextLine,
                              {
                                   scaleY: 0,
                                   transformOrigin: 'top',
                              },
                              {
                                   scaleY: 1,
                                   duration: 1,
                                   ease: 'none',
                              },
                         )
                    }
               }
          })
     }

     useEffect(() => {
          initial()
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

     return (
          <section className={styles.maincon}>
               <Header
                    title={'Building a Better World with Sustainable Goals'}
                    subTitle={
                         'At A2 Technologies, we are committed to contributing to a sustainable and equitable future by aligning our practices with the United Nations Sustainable Development Goals (SDGs).'
                    }
               />
               <div className={styles.gridcon}>
                    {windowWidth >= 800 && (
                         <div
                              className={`${styles.time_line}`}
                              style={{ position: 'relative', zIndex: 2 }}
                         >
                              {Array.from({ length: 7 }).map((_, index) => {
                                   return (
                                        <React.Fragment key={index}>
                                             <div
                                                  className={styles.dot}
                                                  ref={(el: any) => (dotsRefs.current[index] = el)}
                                             >
                                                  <div className={styles.md}>
                                                       <div className={styles.sd}></div>
                                                  </div>
                                             </div>
                                             {index != 6 && (
                                                  <div
                                                       className={`desktop-line ${styles.line}`}
                                                  ></div>
                                             )}
                                        </React.Fragment>
                                   )
                              })}
                         </div>
                    )}
                    {windowWidth < 800 &&
                         Array.from({ length: 7 }).map((_, index) => {
                              return (
                                   <div
                                        key={index}
                                        className={`${styles.timelineCont}`}
                                        style={{ gridRow: `${index + 1}/${index + 2}` }}
                                   >
                                        <div
                                             className={styles.dot}
                                             ref={(el: any) => (dotsRefs.current[index] = el)}
                                        >
                                             <div className={styles.md}>
                                                  <div className={styles.sd}></div>
                                             </div>
                                        </div>
                                        {index != 6 && <div className={styles.line}></div>}
                                   </div>
                              )
                         })}
                    {arr.map((item, index) => {
                         return (
                              <React.Fragment key={index}>
                                   {windowWidth <= 800 ? (
                                        <>
                                             <div
                                                  className={styles.details_con}
                                                  ref={(el: any) =>
                                                       (detailsContentRefs.current[index] = el)
                                                  }
                                             >
                                                  <Consumption data={item} isMobile={true} />
                                             </div>
                                        </>
                                   ) : index % 2 === 0 ? (
                                        <>
                                             <div
                                                  ref={(el: any) =>
                                                       (imageSectionRefs.current[index] = el)
                                                  }
                                                  className={`${styles.image_con} ${styles.flexend}`}
                                             >
                                                  <div className={styles.image_section}>
                                                       <Image
                                                            src={item.canva}
                                                            alt='icon'
                                                            className={`${styles.canva}`}
                                                       />
                                                       <div
                                                            className={styles.num}
                                                            style={
                                                                 {
                                                                      '--hover-color': item.bgColor,
                                                                 } as React.CSSProperties
                                                            }
                                                       >
                                                            <Image
                                                                 src={item.cardImg}
                                                                 alt='icon'
                                                                 className={`${styles.image} ${styles.img}`}
                                                            />
                                                            <h1 className={styles.numberText}>
                                                                 #0{index + 1}
                                                            </h1>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div
                                                  className={styles.details_con}
                                                  ref={(el: any) =>
                                                       (detailsContentRefs.current[index] = el)
                                                  }
                                             >
                                                  <Consumption data={item} />
                                             </div>
                                        </>
                                   ) : (
                                        <>
                                             <div
                                                  className={styles.details_con}
                                                  ref={(el: any) =>
                                                       (detailsContentRefs.current[index] = el)
                                                  }
                                             >
                                                  <div className={styles.middleware}>
                                                       <Consumption data={item} />
                                                  </div>
                                             </div>
                                             <div
                                                  className={styles.image_con}
                                                  ref={(el: any) =>
                                                       (imageSectionRefs.current[index] = el)
                                                  }
                                             >
                                                  <div className={styles.image_section}>
                                                       <Image
                                                            src={item.canva}
                                                            alt='icon'
                                                            className={`${styles.canva}`}
                                                       />
                                                       <div
                                                            className={styles.num}
                                                            style={
                                                                 {
                                                                      '--hover-color': item.bgColor,
                                                                 } as React.CSSProperties
                                                            }
                                                       >
                                                            <Image
                                                                 src={item.cardImg}
                                                                 alt='icon'
                                                                 className={`${styles.image} ${styles.img} ${styles.revImg}`}
                                                            />
                                                            <h1 className={styles.numberText}>
                                                                 #0{index + 1}
                                                            </h1>
                                                       </div>
                                                  </div>
                                             </div>
                                        </>
                                   )}
                              </React.Fragment>
                         )
                    })}
               </div>
          </section>
     )
}

export default SustainableGoals
