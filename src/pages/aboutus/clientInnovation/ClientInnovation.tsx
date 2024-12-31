import React from 'react'
import styles from './ClientInnovation.module.scss'
import ic1 from '../../../assets/images/utlis/ic_ult1.svg'
import ic2 from '../../../assets/images/utlis/ic_ult2.svg'
import ic3 from '../../../assets/images/utlis/ic_ult3.svg'
import ic4 from '../../../assets/images/utlis/ic_ult4.svg'
import ic5 from '../../../assets/images/utlis/ic_ult5.svg'
import ic6 from '../../../assets/images/utlis/ic_ult6.svg'
import ic7 from '../../../assets/images/utlis/ic_ult7.svg'
import ic8 from '../../../assets/images/utlis/ic_ult8.svg'
import ic9 from '../../../assets/images/utlis/ic_ult9.svg'
import ic10 from '../../../assets/images/utlis/ic_ult10.svg'
import ic11 from '../../../assets/images/utlis/ic_ult11.svg'
import ic12 from '../../../assets/images/utlis/ic_ult12.svg'
import ic13 from '../../../assets/images/utlis/ic_ult13.svg'
import ic14 from '../../../assets/images/utlis/ic_ult14.svg'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})

const ClientInnovation = () => {
     const arrayItems = [
          { id: 1, icon: ic1 },
          { id: 2, icon: ic2 },
          { id: 3, icon: ic3 },
          { id: 4, icon: ic4 },
          { id: 5, icon: ic5 },
          { id: 6, icon: ic6 },
          { id: 7, icon: ic7 },
          { id: 8, icon: ic8 },
          { id: 9, icon: ic9 },
          { id: 10, icon: ic10 },
          { id: 11, icon: ic11 },
          { id: 12, icon: ic12 },
          { id: 13, icon: ic13 },
          { id: 14, icon: ic14 },
     ]

     return (
          <section className={` ${styles.main_con} ${inter.className}`}>
               <div className={styles.details_section}>
                    <div className={styles.details_con}>
                         <h2 className={`${styles.title} ${styles.blackText}`}>
                              <MainHeading>
                                   Our Key Clients Shape Innovation and Success Together{' '}
                              </MainHeading>
                         </h2>
                         <p className={styles.description}>
                              <MainPara>
                                   We collaborate with leading organizations, driving innovation and
                                   delivering tailored solutions to meet their goals.
                              </MainPara>
                         </p>
                    </div>
               </div>
               <div className={styles.utils_section}>
                    {Array.from({ length: 4 }).map((_, index) => (
                         <div
                              key={index}
                              className={`${styles.utlis_wrapper} ${index % 2 === 0 ? styles.moveUp : styles.moveDown}`}
                         >
                              {arrayItems.map((arrayItem, subIndex) => (
                                   <Image
                                        key={subIndex}
                                        src={arrayItem.icon}
                                        alt='image'
                                        className={styles.image}
                                   />
                              ))}
                         </div>
                    ))}
               </div>
          </section>
     )
}

export default ClientInnovation
