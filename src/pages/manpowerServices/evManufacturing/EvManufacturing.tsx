import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import bgImage1 from '../../../assets/images/purpose/img_pur_bg1.png'
import bgImage2 from '../../../assets/images/purpose/img_pur_bg2.png'
import image1 from '../../../assets/images/man_power/img_ev_ly1.png'
import image2 from '../../../assets/images/man_power/img_ev_ly2.png'
import image3 from '../../../assets/images/man_power/img_ev_ly3.png'
import AlternatingContentLayout from '@/component/alternatingContentLayout/AlternatingContentLayout'

const EvManufacturing = () => {
     let arr: any = [
          {
               bgImage: bgImage1,
               img: image1,
               title: 'EV Design Engineers',
               description:
                    'Experts in electric vehicle architecture, including battery design, power electronics, and motor systems.',
          },
          {
               bgImage: bgImage2,
               img: image2,
               title: 'Automation Engineers for EV Production',
               description:
                    'Implementing automation systems for the assembly and production of electric vehicles.',
          },
          {
               bgImage: bgImage1,
               img: image3,
               title: 'Project Managers',
               description:
                    'Skilled manpower in assembling, testing, and maintaining EV battery systems.',
          },
     ]
     return (
          <section className={styles.main_container} style={{ backgroundColor: '#fff' }}>
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         LNG Shipping and Logistics Personnel
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Marine Engineers and Logistics Managers oversee safe LNG cargo handling and
                         supply chain management, ensuring efficient LNG distribution across
                         regions.
                    </p>
               </header>
               <AlternatingContentLayout content={arr} />
          </section>
     )
}

export default EvManufacturing
