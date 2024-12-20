'use client'

import styles from './SustainableGoals.module.scss'
import Header from '@/component/header/Header'
import Image from 'next/image'
import img_gender from '../../../assets/images/img_gender.png'
import img_decentWork from '../../../assets/images/img_decentWork.png'
import img_industry from '../../../assets/images/img_industry.png'
import img_inequal from '../../../assets/images/img_inequal.png'
import img_com_product from '../../../assets/images/img_com_product.png'
import img_climate from '../../../assets/images/img_climate.png'
import img_institutions from '../../../assets/images/img_institutions.png'
import ic_gender from '../../../assets/icons/ic_gender.svg'
import ic_decentWork from '../../../assets/icons/ic_decent.svg'
import ic_inequal from '../../../assets/icons/ic_inequal.svg'
import ic_com_product from '../../../assets/icons/ic_com_product.svg'
import ic_climate from '../../../assets/icons/ic_climate.svg'
import ic_industry from '../../../assets/icons/ic_industry.svg'
import ic_institutions from '../../../assets/icons/ic_institutions.svg'
import imagess from '../../../assets/images/img_susgoals.png'
import Consumption from '@/component/consumption/Consumption'
import { useEffect, useRef, useState } from 'react'
import React from 'react'

function SustainableGoals() {
     const [windowWidth, setWindowWidth] = useState(
          typeof window != 'undefined' ? window.innerWidth : 0,
     )

     const currentViewRef = useRef(null)

     useEffect(() => {
          if (typeof window != 'undefined') {
               const handleResize = () => setWindowWidth(window.innerWidth)
               window.addEventListener('resize', handleResize)
               return () => window.removeEventListener('resize', handleResize)
          }
     }, [])

     let arr = [
          {
               no: 1,
               image: imagess,
               icon: ic_gender,
               title: 'Gender Equality',
               description:
                    'Promoting equal opportunities and empowering all genders within the workplace and beyond.',
               target: [],
               bgColor: '#EF402D',
               hoverColor: '#FCE4E1',
          },
          {
               no: 2,
               image: img_decentWork,
               icon: ic_decentWork,
               title: 'Decent Work & Economic Growth',
               description:
                    'Ensuring inclusive and sustainable economic growth by creating safe, productive work environments.',
               target: [],
               bgColor: '#A31C44',
               hoverColor: '#F2DFE5',
          },
          {
               no: 3,
               image: img_industry,
               icon: ic_industry,
               title: 'Industry, innovation and infrastructure',
               description:
                    'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.',
               target: [],
               bgColor: '#F26A2E',
               hoverColor: '#FDEAE1',
          },
          {
               no: 4,
               image: img_inequal,
               icon: ic_inequal,
               title: 'Reduced Inequalities',
               description:
                    'Working to reduce disparities by fostering diversity, equity, and inclusion in every aspect of our business.',
               target: [],
               bgColor: '#E01483',
               hoverColor: '#FADEED',
          },
          {
               no: 5,
               image: img_com_product,
               icon: ic_com_product,
               title: 'Responsible Consumption & Production',
               description:
                    'Committing to sustainable practices that reduce waste and promote responsible resource management.',
               target: [],
               bgColor: '#BF8D2C',
               hoverColor: '#F6EFE1',
          },
          {
               no: 6,
               image: img_climate,
               icon: ic_climate,
               title: 'Climate action',
               description: 'Take urgent action to combat climatic change and its impacts.',
               target: [],
               bgColor: '#407F46',
               hoverColor: '#E4EDE5',
          },
          {
               no: 7,
               image: img_institutions,
               icon: ic_institutions,
               title: 'Peace, Justice, & Strong Institutions',
               description:
                    'Supporting strong, transparent institutions and promoting justice and peace for sustainable development.',
               target: [],
               bgColor: '#136A9F',
               hoverColor: '#DEEAF1',
          },
     ]
     return (
          <section className={styles.maincon}>
               <Header
                    title={'Building a Better World with Sustainable Goals'}
                    subTitle={
                         'At A2 Technologies, we are committed to contributing to a sustainable and equitable future by aligning our practices with the United Nations Sustainable Development Goals (SDGs).'
                    }
               />
               <div className={styles.gridcon}>
                    {windowWidth > 800 && (
                         <div
                              className={styles.time_line}
                              style={{ position: 'relative', zIndex: 2 }}
                         >
                              {Array.from({ length: 7 }).map((_, index) => {
                                   return (
                                        <React.Fragment key={index}>
                                             <div className={styles.dot}>
                                                  <div className={styles.md}>
                                                       <div className={styles.sd}></div>
                                                  </div>
                                             </div>
                                             {index != 6 && <div className={styles.line}></div>}
                                        </React.Fragment>
                                   )
                              })}

                              {/* <div
                                   className={`${styles.line} ${styles.draw_line}`}
                                   style={{
                                        background: 'red',
                                        width: '2px',
                                        height: '90%',
                                        position: 'absolute',
                                        zIndex: 1,
                                   }}
                              ></div> */}
                         </div>
                    )}
                    {windowWidth <= 800 &&
                         Array.from({ length: 7 }).map((_, index) => {
                              return (
                                   <div
                                        key={index}
                                        className={styles.timelineCont}
                                        style={{ gridRow: `${index + 1}/${index + 2}` }}
                                   >
                                        <div className={styles.dot}>
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
                                             <div className={styles.details_con}>
                                                  <Consumption data={item} />
                                             </div>
                                        </>
                                   ) : index % 2 === 0 ? (
                                        <>
                                             <div
                                                  className={`${styles.image_con} ${styles.flexend}`}
                                             >
                                                  <Image
                                                       src={item.image}
                                                       alt='icon'
                                                       className={styles.image}
                                                  />
                                             </div>
                                             <div className={styles.details_con}>
                                                  <Consumption data={item} />
                                             </div>
                                        </>
                                   ) : (
                                        <>
                                             <div className={styles.details_con}>
                                                  <div className={styles.middleware}>
                                                       <Consumption data={item} />
                                                  </div>
                                             </div>
                                             <div className={styles.image_con}>
                                                  <Image
                                                       src={item.image}
                                                       alt='icon'
                                                       className={styles.image}
                                                  />
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
