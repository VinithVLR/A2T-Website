import React from 'react'
import styles from './ClientInnovation.module.scss'
import utlisIcon from '../../../assets/images/img_utlis.png'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})

const ClientInnovation = () => {
     return (
          <section className={` ${styles.main_con} ${inter.className}`}>
               <div className={styles.details_section}>
                    <div className={styles.details_con}>
                         <h2 className={`${styles.title} ${styles.blackText}`}>
                              Our Key Clients Shape Innovation and Success Together
                         </h2>
                         <p className={styles.description}>
                              We collaborate with leading organizations, driving innovation and
                              delivering tailored solutions to meet their goals
                         </p>
                    </div>
               </div>
               <div className={styles.utils_section}>
                    <div className={styles.utlis_wrapper}>
                         <Image src={utlisIcon} alt='image' className={styles.image} />
                    </div>
               </div>
          </section>
     )
}

export default ClientInnovation
