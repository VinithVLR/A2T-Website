import React from 'react'
import AlternatingContentLayout from '@/component/alternatingContentLayout/AlternatingContentLayout'
import styles from '../../../scss/layout/common.module.scss'
import bgImage1 from '../../../assets/images/purpose/img_pur_bg1.png'
import bgImage2 from '../../../assets/images/purpose/img_pur_bg2.png'
import image1 from '../../../assets/images/eng-ser/img_lng_ly1.png'
import image2 from '../../../assets/images/eng-ser/img_lng_ly2.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const LngLiquefiedNaturalGas = () => {
     let arr: any = [
          {
               bgImage: bgImage1,
               img: image1,
               title: 'Operations and Maintenance of LNG Commercial Trucks',
               description: 'Comprehensive evaluation of Scope 1, 2, and 3 emissions.',
               link: 'operation-&-maintenance-of-LNG-commercial-trucks',
          },
          {
               bgImage: bgImage2,
               img: image2,
               title: 'LNG Technicians deployed for OEM’s ',
               link: 'LNG-technicians-deployed-for-OEM',
               description: 'Strategies to minimize carbon footprint and achieve net-zero goals.',
          },
     ]
     return (
          <section
               id='liquefied-natural-gas'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         LNG (Liquefied natural gas)
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         We provide complete operations and maintenance services for LNG commercial
                         trucks. Our LNG technicians are skilled and ready to support OEMs with
                         precision and efficiency.
                    </MainPara>
               </header>
               <AlternatingContentLayout content={arr} />
          </section>
     )
}

export default LngLiquefiedNaturalGas
