import React from 'react'
import styles from './GlobalTrustSection.module.scss'
import Image from 'next/image'
import cmeIcon from '../../../assets/icons/ic_cme.svg'
import { Inter } from 'next/font/google'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
})
const GlobalTrustSection = () => {
     let arr = [1, 2, 3, 4, 5]
     return (
          <section className={`${styles.main_container} ${inter.className}`}>
               <p className={`${styles.para} ${styles.regularText}`}>Trusted By Global Companies</p>
               <div className={`${styles.flex_con}`}>
                    {arr.map((item: any, index: any) => {
                         return (
                              <div key={index} className={`${styles.img_wrapper}`}>
                                   <Image src={cmeIcon} alt='' />
                              </div>
                         )
                    })}
               </div>
          </section>
     )
}

export default GlobalTrustSection
