import React from 'react'
import styles from './GlobalImpact.module.scss'
import imageLeft from '../../../assets/images/img_global_left.png'
import imageRight from '../../../assets/images/img_global_right.png'

import Image from 'next/image'
const GlobalImpact = () => {
     let arr = [
          {
               image: imageLeft,
               title: 'Through our sustainability initiatives, we aim to reduce carbon emissions',
          },
          {
               image: imageRight,
               title: "Contribute to the UN's Sustainable Development by Promoting inclusive and sustainable economic growth, employment, and decent work for all.",
          },
     ]

     return (
          <section className={styles.global_impact_sec}>
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         We are Making a Global Impact
                    </h3>
               </header>

               <div className={styles.flex_content}>
                    {arr.map((item: any, index) => (
                         <div key={index} className={styles.details_content}>
                              <p className={styles.para}>{item.title}</p>
                              <div className={styles.img_wrapper}>
                                   <Image src={item.image} alt='image' className={styles.image} />
                              </div>
                         </div>
                    ))}
               </div>
          </section>
     )
}

export default GlobalImpact
