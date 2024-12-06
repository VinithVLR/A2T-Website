import React, { useEffect, useState } from 'react'
import styles from './Consumption.module.scss'
import Image from 'next/image'
import icontool from '../../assets/icons/ic_tool.svg'
import cubeIcon from '../../assets/icons/cubeIcon.svg'
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
     const [windowWidth, setWindowWidth] = useState(window.innerWidth)

     useEffect(() => {
          const handleResize = () => setWindowWidth(window.innerWidth)
          window.addEventListener('resize', handleResize)
          return () => window.removeEventListener('resize', handleResize)
     }, [windowWidth])

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
                    <div className={`${styles.flex_con}`}>
                         <div className={`${styles.image_con}`} style={{ backgroundColor: hover }}>
                              <div
                                   className={`${styles.image_wrapper}`}
                                   style={{ backgroundColor: color }}
                              >
                                   <Image src={icontool} alt='icon' className={`${styles.icon}`} />
                              </div>
                              <div className={`${styles.para}`} style={{ color: color }}>
                                   adopt & strengthen policies & enforceable legislation for gender
                                   equality
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Consumption
