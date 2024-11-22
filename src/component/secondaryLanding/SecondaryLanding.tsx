import React from 'react'
import styles from './SecondaryLanding.module.scss'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '600', '800'],
     style: ['normal'],
})
const SecondaryLanding = ({ flexReverse, heading, description, image }: any) => {
     return (
          <section
               className={`${styles.main_con} ${flexReverse ? styles.reverse : ''} ${inter.className}`}
          >
               <div
                    className={styles.details_section}
                    style={{ paddingInlineStart: flexReverse ? '5rem' : '' }}
               >
                    <div className={styles.con_wrapper}>
                         <h3 className={`${styles.heading}  ${styles.blackText}`}>{heading}</h3>
                         <p
                              className={`${styles.description} ${styles.regularText}`}
                              style={{ width: flexReverse ? '100%' : '75%' }}
                         >
                              {description}
                         </p>
                    </div>
               </div>
               <div className={styles.image_section}>
                    <div className={styles.image_wrapper}>
                         <Image src={image} alt='image' priority className={styles.image} />
                    </div>
               </div>
          </section>
     )
}

export default SecondaryLanding
