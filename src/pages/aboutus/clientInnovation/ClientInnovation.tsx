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
     const obj: any = {
          first: [ic1, ic2, ic3, ic4, ic5, ic12],
          second: [ic6, ic13, ic8, ic9, ic10, ic11],
          third: [ic12, ic7, ic14, ic3, ic1, ic5],
          fourth: [ic11, ic2, ic6, ic4, ic10, ic8],
     }
     return (
          <section className={` ${styles.main_con} ${inter.className}`}>
               <div className={styles.details_section}>
                    <div className={styles.details_con}>
                         <MainHeading className={`${styles.title} ${styles.blackText}`}>
                              Our Key Clients Shape Innovation and Success Together{' '}
                         </MainHeading>
                         <MainPara className={styles.description}>
                              We collaborate with leading organizations, driving innovation and
                              delivering tailored solutions to meet their goals.
                         </MainPara>
                    </div>
               </div>
               <div className={styles.utils_section}>
                    {['first', 'second', 'third', 'fourth'].map((keyName, index) => (
                         <div
                              key={index}
                              className={`${styles.utlis_wrapper} ${index % 2 == 0 ? styles.reverse : ''}`}
                         >
                              <div
                                   className={styles.imgSec}
                                   style={{ animationDelay: `${index * 0.25}s` }}
                              >
                                   {obj[keyName].map((arrayItem: any, subIndex: any) => {
                                        return (
                                             <React.Fragment key={subIndex}>
                                                  <Image
                                                       src={arrayItem}
                                                       alt='image'
                                                       className={styles.image}
                                                  />
                                             </React.Fragment>
                                        )
                                   })}
                              </div>
                              <div
                                   className={styles.imgSec}
                                   style={{ animationDelay: `${index * 0.25}s` }}
                              >
                                   {obj[keyName].map((arrayItem: any, subIndex: any) => {
                                        return (
                                             <React.Fragment key={subIndex}>
                                                  <Image
                                                       src={arrayItem}
                                                       alt='image'
                                                       className={styles.image}
                                                  />
                                             </React.Fragment>
                                        )
                                   })}
                              </div>
                         </div>
                    ))}
               </div>
          </section>
     )
}

export default ClientInnovation
