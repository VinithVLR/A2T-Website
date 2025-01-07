'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './Consumption.module.scss'
import Image from 'next/image'
import ic_first from '../../assets/icons/ic_1st.svg'
import ic_sec from '../../assets/icons/ic_2nd.svg'
import ic_third from '../../assets/icons/ic_3rd.svg'
import ic_fourth from '../../assets/icons/ic_4th.svg'
import ic_fiveth from '../../assets/icons/ic_5th.svg'
import iconNavigate from '../../assets/icons/ic_navigate.svg'
import { Inter } from 'next/font/google'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})

const Consumption = ({ data, isMobile }: any) => {
     const title = data?.title
     const des = data?.description
     const id = data.no
     const color = data.bgColor
     const icon = data.icon
     const hover = data.hoverColor
     const [active, setActive] = useState('one')
     const [height, setHeight] = useState('3rem')
     const containerRef = useRef<HTMLDivElement>(null)

     const getRemValue = () => {
          const fontSize = window.getComputedStyle(document.documentElement).fontSize
          return parseFloat(fontSize)
     }

     useEffect(() => {
          if (typeof window !== 'undefined') {
               const e = document.querySelector('.flex_con')
               if (e) {
                    const ow = e.getBoundingClientRect().width
                    let iw = (ow - 2 * getRemValue()) / 5
                    setHeight(`${iw}px`)
               }
          }
     }, [])

     const hoverWrapper = (key: string) => {
          setActive(key)
     }

     return (
          <section className={`${styles.consumption} ${inter.className}`}>
               <div className={`${styles.header}`}>
                    <div className={`${styles.flex_con}`}>
                         <div className={`${styles.image_wrapper}`}>
                              <Image src={icon} alt='icon' className={`${styles.icon}`} />
                         </div>
                         <h4>
                              {title} &nbsp;
                              <span
                                   className={styles.icon_wrapper}
                                   onClick={() => alert('navigate')}
                              >
                                   <Image
                                        src={iconNavigate}
                                        alt='icon'
                                        className={`${styles.icon}`}
                                   />
                              </span>
                         </h4>
                    </div>
                    <p className={`${styles.para} ${styles.regularText}`}>{des}</p>
               </div>
               {isMobile ? (
                    <div className={styles.mob_img_wrp}>
                         {/* <Image src={data.image} alt='image' className={`${styles.image}`} /> */}
                         <Image src={data.canva} alt='icon' className={`${styles.canva}`} />
                         <div
                              className={styles.num}
                              style={
                                   {
                                        '--hover-color': data.bgColor,
                                   } as React.CSSProperties
                              }
                         >
                              <Image
                                   src={data.cardImg}
                                   alt='icon'
                                   className={`${styles.image} ${styles.img}`}
                              />
                              <h1 className={styles.numberText}>#0{id}</h1>
                         </div>
                    </div>
               ) : null}
               <div className={`${styles.main_con}`}>
                    <h3 className={`${styles.regularText}`}>Targets</h3>
                    <div className={`flex_con ${styles.flex_con}`} ref={containerRef}>
                         <div className={styles.cont}>
                              <div
                                   className={`${styles.image_con} ${active == 'one' && styles.active}`}
                                   onMouseEnter={() => hoverWrapper('one')}
                                   style={{ backgroundColor: hover, height: height }}
                              >
                                   <div
                                        className={`${styles.image_wrapper}`}
                                        style={{ backgroundColor: color }}
                                   >
                                        <Image
                                             src={ic_first}
                                             alt='icon'
                                             className={`${styles.icon}`}
                                        />
                                   </div>
                                   <div className={`${styles.para}`} style={{ color: color }}>
                                        adopt & strengthen policies & enforceable legislation for
                                        gender equality
                                   </div>
                              </div>
                              <div
                                   className={`${styles.image_con}  ${active == 'two' && styles.active}`}
                                   onMouseEnter={() => hoverWrapper('two')}
                                   style={{ backgroundColor: hover, height: height }}
                              >
                                   <div
                                        className={`${styles.image_wrapper}`}
                                        style={{ backgroundColor: color }}
                                   >
                                        <Image
                                             src={ic_sec}
                                             alt='icon'
                                             className={`${styles.icon}`}
                                        />
                                   </div>
                                   <div className={`${styles.para}`} style={{ color: color }}>
                                        adopt & strengthen policies & enforceable legislation for
                                        gender equality
                                   </div>
                              </div>
                              <div
                                   className={`${styles.image_con} ${active == 'three' && styles.active}`}
                                   onMouseEnter={() => hoverWrapper('three')}
                                   style={{ backgroundColor: hover, height: height }}
                              >
                                   <div
                                        className={`${styles.image_wrapper}`}
                                        style={{ backgroundColor: color }}
                                   >
                                        <Image
                                             src={ic_third}
                                             alt='icon'
                                             className={`${styles.icon}`}
                                        />
                                   </div>
                                   <div className={`${styles.para}`} style={{ color: color }}>
                                        adopt & strengthen policies & enforceable legislation for
                                        gender equality
                                   </div>
                              </div>
                         </div>
                         <div className={styles.cont}>
                              <div
                                   className={`${styles.image_con} ${styles.fourth} ${active == 'four' && styles.active}`}
                                   onMouseEnter={() => hoverWrapper('four')}
                                   style={{ backgroundColor: hover, height: height }}
                              >
                                   <div
                                        className={`${styles.image_wrapper}`}
                                        style={{ backgroundColor: color }}
                                   >
                                        <Image
                                             src={ic_fourth}
                                             alt='icon'
                                             className={`${styles.icon}`}
                                        />
                                   </div>
                                   <div className={`${styles.para}`} style={{ color: color }}>
                                        adopt & strengthen policies & enforceable legislation for
                                        gender equality
                                   </div>
                              </div>
                              <div
                                   className={`${styles.image_con} ${styles.fifth} ${active == 'five' && styles.active}`}
                                   onMouseEnter={() => hoverWrapper('five')}
                                   style={{ backgroundColor: hover, height: height }}
                              >
                                   <div
                                        className={`${styles.image_wrapper}`}
                                        style={{ backgroundColor: color }}
                                   >
                                        <Image
                                             src={ic_fiveth}
                                             alt='icon'
                                             className={`${styles.icon}`}
                                        />
                                   </div>
                                   <div className={`${styles.para}`} style={{ color: color }}>
                                        adopt & strengthen policies & enforceable legislation for
                                        gender equality
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Consumption
