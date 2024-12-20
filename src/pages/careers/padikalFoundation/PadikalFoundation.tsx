'use client'

import styles from './PadikalFoundation.module.scss'
import sm1 from '../../../assets/images/careers/img_padikal_sm1.png'
import canva1 from '../../../assets/images/careers/canva_padikal.png'
import canva2 from '../../../assets/images/careers/canva_padikal2.png'
import canva3 from '../../../assets/images/careers/canva_padikal3.png'
import sm2 from '../../../assets/images/careers/img_padikal_sm2.png'
import lg1 from '../../../assets/images/careers/img_padikal_lg1.png'
import lg2 from '../../../assets/images/careers/img_padikal_lg2.png'
import Button from '@/component/button/Button'
import { useEffect, useState } from 'react'
import Image from 'next/image'

function PadikalFoundation() {
     const [width, setWidth] = useState(true)

     useEffect(() => {
          if (typeof window !== 'undefined') {
               const innerWidth = window.innerWidth
               setWidth(innerWidth >= 768)
          }
     }, [])

     return (
          <section className={styles.bodyMainCon}>
               <div className={`${styles.cont} ${styles.mobileView}`}>
                    <div className={styles.flex}>
                         <Image src={sm1} alt='' className={styles.mobileCover} />
                         {width && <Image src={canva1} alt='' />}
                         {width && <Image src={lg1} alt='' />}
                    </div>
                    <div>
                         <p className={styles.para}>
                              Padikkal Foundation empowers underprivileged individuals by offering
                              access to quality education and professional training. We connect
                              aspiring talents with expert mentors and renowned institutes, ensuring
                              they gain the skills and opportunities needed to succeed in their
                              careers and build a brighter future.
                         </p>
                         <Button
                              label='Explore our Purpose'
                              disabled={false}
                              icon
                              className={styles.applyBtn}
                              loading={false}
                              labestyle={{
                                   fontSize: '0.925rem',
                                   marginRight: '5px',
                              }}
                         />
                    </div>
               </div>
               <div className={`${styles.cont} ${styles.paddingTop}`}>
                    <div className={styles.titleCard}>The Padikkal Foundation</div>
                    <h2
                         className={`${styles.heading} ${styles.blackText} ${styles.sectionHeading}`}
                    >
                         Shaping Futures with Professional Training and Global Opportunities
                    </h2>
                    {width && (
                         <div className={`${styles.flex} ${styles.secondContainer}`}>
                              <Image src={sm2} alt='' />
                              <Image src={canva3} alt='' />
                              <Image src={lg2} alt='' />
                         </div>
                    )}
               </div>
               {width && <Image src={canva2} alt='' className={styles.canvaImage} />}
          </section>
     )
}

export default PadikalFoundation
