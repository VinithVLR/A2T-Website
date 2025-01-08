import React from 'react'
import styles from './LogisticsOptimization.module.scss'
import Image from 'next/image'
import bgImage from '../../../assets/images/img_emp_7.png'
import img from '../../../assets/images/fleet/img_lan_1.png'
import img1 from '../../../assets/images/fleet/img_lan_2.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const LogisticsOptimization = () => {
     return (
          <section className={styles.main_con}>
               <div className={styles.container_wrp}>
                    <div className={styles.img_wrapper}>
                         <div className={styles.img}>
                              <Image
                                   src={img}
                                   alt=''
                                   priority
                                   placeholder='blur'
                                   className={styles.image}
                              />
                         </div>
                    </div>
                    <div className={styles.details_con}>
                         <label className={styles.label}>Fleet management Services</label>
                         <MainHeading className={styles.heading}>
                              Optimized <span>Fleet Management</span> for Seamless Logistics
                              Operations
                         </MainHeading>
                         <MainPara className={styles.desc}>
                              From vehicle tracking to maintenance, we provide comprehensive fleet
                              solutions tailored to your business needs.
                         </MainPara>
                    </div>
               </div>
               <div className={styles.img_Stretch_Full}>
                    <div className={styles.img_wrapper}>
                         <Image
                              src={img1}
                              alt=''
                              priority
                              placeholder='blur'
                              className={styles.fullimage}
                         />
                    </div>
               </div>
          </section>
     )
}

export default LogisticsOptimization
