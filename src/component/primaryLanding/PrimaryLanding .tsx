import React from 'react'
import styles from './PrimaryLanding .module.scss'
import Image from 'next/image'
import img_contact from '../../assets/images/img_contact.png'
import { Inter } from 'next/font/google'
import thumb_nail from '../../assets/images/img_contact_thumb.png'
const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '600', '800'],
     style: ['normal'],
})
const PrimaryLanding = () => {
     return (
          <section className={`${styles.main_con} ${inter.className}`}>
               <div className={styles.image_section}>
                    <div className={styles.image_wrapper}>
                         <Image src={img_contact} alt='image' priority className={styles.image} />
                    </div>
               </div>
               <div className={styles.details_section}>
                    <div className={styles.con_wrapper}>
                         <div className={`${styles.btn_container} ${styles.semiBoldText}`}>
                              About us
                         </div>
                         <h3 className={`${styles.heading}  ${styles.blackText}`}>
                              Innovative Solutions for a Sustainable & Impactful Future
                         </h3>
                         <p className={`${styles.description} ${styles.regularText}`}>
                              We deliver innovative, sustainable solutions that drive impactful
                              change, empowering businesses to thrive and meet evolving industry
                              demands.
                         </p>
                         <div className={styles.thumb_nailWrapper_con}>
                              <div className={styles.thumb_nailWrapper}>
                                   <Image src={thumb_nail} alt='' className={styles.image} />
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default PrimaryLanding
