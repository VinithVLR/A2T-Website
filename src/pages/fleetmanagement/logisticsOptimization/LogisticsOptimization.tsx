import React from 'react'
import styles from './LogisticsOptimization.module.scss'
import Image from 'next/image'
import bgImage from '../../../assets/images/img_emp_7.png'
const LogisticsOptimization = () => {
     return (
          <section className={styles.main_con}>
               <div className={styles.container_wrp}>
                    <div className={styles.img_wrapper}>
                         <Image src={bgImage} alt='' />
                    </div>
                    <div className={styles.details_con}>
                         <h4>Optimized Fleet Management for Seamless Logistics Operations</h4>
                         <p>
                              From vehicle tracking to maintenance, we provide comprehensive fleet
                              solutions tailored to your business needs.
                         </p>
                    </div>
               </div>
               <div className={styles.img_Stretch_Full}>
                    <Image src={bgImage} alt='' />
               </div>
          </section>
     )
}

export default LogisticsOptimization
