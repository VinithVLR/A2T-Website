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
import Consumption from '../consumption/Consumption'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const SustainableBusinessAlignment = () => {
     const [isSmallScreen, setIsSmallScreen] = useState(false)
     const [windowWidth, setWindowWidth] = useState(
          typeof window != 'undefined' ? window.innerWidth : 0,
     )

     useEffect(() => {
          if (typeof window != 'undefined') {
               const handleResize = () => setWindowWidth(window.innerWidth)
               window.addEventListener('resize', handleResize)
               return () => window.removeEventListener('resize', handleResize)
          }
     }, [])

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

     return (
          <section className={styles.main_container}>
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         Aligning Business Success with Environmental Responsibility
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         From reducing carbon footprints to fostering equality and promoting
                         responsible growth, we align our services with the UN&apos;s Sustainable
                         Development Goals.
                    </MainPara>
               </header>

               <div className={styles.gridcon}>
                    {windowWidth > 800 && (
                         <div
                              className={styles.time_line}
                              style={{ position: 'relative', zIndex: 2 }}
                         >
                              {Array.from({ length: 3 }).map((_, index) => {
                                   return (
                                        <React.Fragment key={index}>
                                             <div className={styles.dot}>
                                                  <div className={styles.md}>
                                                       <div className={styles.sd}></div>
                                                  </div>
                                             </div>
                                             {index != 2 && <div className={styles.line}></div>}
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
                         Array.from({ length: 3 }).map((_, index) => {
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
                                        {index != 2 && <div className={styles.line}></div>}
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
                                                       src={item?.image}
                                                       alt='icon'
                                                       className={styles.image}
                                                  />
                                                  <Image
                                                       src={item?.bgImage}
                                                       alt='icon'
                                                       className={styles.bgImage}
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
                                                       src={item?.image}
                                                       alt='icon'
                                                       className={styles.image}
                                                  />
                                                  <Image
                                                       src={item?.bgImage}
                                                       alt='icon'
                                                       className={styles.bgImage}
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

export default SustainableBusinessAlignment
