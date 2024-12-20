'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './Consumption.module.scss'
import Image from 'next/image'
import icontool from '../../assets/icons/ic_tool.svg'
import iconNavigate from '../../assets/icons/ic_navigate.svg'
import { Inter } from 'next/font/google'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})

const Consumption = ({ data }: any) => {
     const title = data?.title
     const des = data?.description
     const id = data.no
     const color = data.bgColor
     const icon = data.icon
     const hover = data.hoverColor
     const [windowWidth, setWindowWidth] = useState(
          typeof window != 'undefined' ? window.innerWidth : 0,
     )
     const [active, setActive] = useState('one')
     const [height, setHeight] = useState('3rem')
     const containerRef = useRef<HTMLDivElement>(null)

     useEffect(() => {
          if (typeof window != 'undefined') {
               const handleResize = () => setWindowWidth(window.innerWidth)
               window.addEventListener('resize', handleResize)
               return () => window.removeEventListener('resize', handleResize)
          }
     }, [])

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
                    <div
                         className={`${styles.count_con}`}
                         style={{ backgroundColor: color }}
                    >{`# ${id}`}</div>
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
               {windowWidth <= 768 ? (
                    <div className={styles.mob_img_wrp}>
                         <Image src={data.image} alt='image' className={`${styles.image}`} />
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
                                             src={icontool}
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
                                             src={icontool}
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
                                             src={icontool}
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
                                             src={icontool}
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
                                             src={icontool}
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

// {/* <div className={`${styles.flex_con}`}>
//                          <div
//                               className={`${styles.image_con} ${active == 'one' && styles.active}`}
//                               onMouseEnter={() => hoverWrapper('one')}
//                               style={{ backgroundColor: hover }}
//                          >
// <div
//      className={`${styles.image_wrapper}`}
//      style={{ backgroundColor: color }}
// >
//      <Image src={icontool} alt='icon' className={`${styles.icon}`} />
// </div>
// <div className={`${styles.para}`} style={{ color: color }}>
//      {/* adopt & strengthen policies & enforceable legislation for gender
//      equality */}
// </div>
//                          </div>
//                          <div
//                               className={`${styles.image_con}  ${active == 'two' && styles.active}`}
//                               onMouseEnter={() => hoverWrapper('two')}
//                               style={{ backgroundColor: hover }}
//                          >
//                               <div
//                                    className={`${styles.image_wrapper}`}
//                                    style={{ backgroundColor: color }}
//                               >
//                                    <Image src={icontool} alt='icon' className={`${styles.icon}`} />
//                               </div>
//                               <div className={`${styles.para}`} style={{ color: color }}>
//                                    {/* adopt & strengthen policies & enforceable legislation for gender
//                                    equality */}
//                               </div>
//                          </div>
//                          <div
//                               className={`${styles.image_con} ${active == 'three' && styles.active}`}
//                               onMouseEnter={() => hoverWrapper('three')}
//                               style={{ backgroundColor: hover }}
//                          >
//                               <div
//                                    className={`${styles.image_wrapper} `}
//                                    style={{ backgroundColor: color }}
//                               >
//                                    <Image src={icontool} alt='icon' className={`${styles.icon}`} />
//                               </div>
//                               <div className={`${styles.para}`} style={{ color: color }}>
//                                    {/* adopt & strengthen policies & enforceable legislation for gender
//                                    equality */}
//                               </div>
//                          </div>
//                          <div
//                               className={`${styles.image_con} ${active == 'four' && styles.active}`}
//                               onMouseEnter={() => hoverWrapper('four')}
//                               style={{ backgroundColor: hover }}
//                          >
//                               <div
//                                    className={`${styles.image_wrapper} `}
//                                    style={{ backgroundColor: color }}
//                               >
//                                    <Image src={icontool} alt='icon' className={`${styles.icon}`} />
//                               </div>
//                               <div className={`${styles.para}`} style={{ color: color }}>
//                                    {/* adopt & strengthen policies & enforceable legislation for gender
//                                    equality */}
//                               </div>
//                          </div>
//                          <div
//                               className={`${styles.image_con} ${active == 'five' && styles.active}`}
//                               onMouseEnter={() => hoverWrapper('five')}
//                               style={{ backgroundColor: hover }}
//                          >
//                               <div
//                                    className={`${styles.image_wrapper}`}
//                                    style={{ backgroundColor: color }}
//                               >
//                                    <Image src={icontool} alt='icon' className={`${styles.icon}`} />
//                               </div>
//                               <div className={`${styles.para}`} style={{ color: color }}>
//                                    {/* adopt & strengthen policies & enforceable legislation for gender
//                                    equality */}
//                               </div>
//                          </div>
//                     </div> */}
