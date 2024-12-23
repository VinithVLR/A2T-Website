import React from 'react'

import bgImage1 from '../../../assets/images/fleet/img_flt_bg1.png'
import image1 from '../../../assets/images/fleet/img_flt_1.png'
import bgImage2 from '../../../assets/images/fleet/img_flt_bg2.png'
import image2 from '../../../assets/images/fleet/img_flt_2.png'
import bgImage3 from '../../../assets/images/fleet/img_flt_bg3.png'
import image3 from '../../../assets/images/fleet/img_flt_3.png'
import bgImage4 from '../../../assets/images/fleet/img_flt_bg4.png'
import image4 from '../../../assets/images/fleet/img_flt_4.png'
import AlternatingContentLayout from '@/component/alternatingContentLayout/AlternatingContentLayout'
import styles from '../../../scss/layout/common.module.scss'
const FleetSolutions = () => {
     let arr: any = [
          {
               bgImage: bgImage1,
               img: image1,
               title: 'Maintenance and Repairs',
               description:
                    'Regular maintenance schedules and 24/7 repair services to minimize downtime.',
               link: 'maintence-and-repairs',
          },
          {
               bgImage: bgImage2,
               img: image2,
               title: 'Real-Time Tracking',
               description:
                    'Advanced GPS tracking for better route planning and operational control.',
               link: 'real-time-tracking',
          },
          {
               bgImage: bgImage3,
               img: image3,
               title: 'Vehicle Procurement and Leasing',
               description:
                    'Customized solutions for acquiring and leasing vehicles suited to your operational needs.',
               link: 'vehicle-procurement-and-Leasing',
          },
          {
               bgImage: bgImage4,
               img: image4,
               title: 'Fuel Management',
               description:
                    'Efficient fuel usage monitoring and optimization to reduce costs and carbon footprint.',
               link: 'fuel-management',
          },
     ]
     return (
          <section id='fleet-solutions' className={styles.main_container}>
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         End-to-End Fleet Solutions Tailored to Your Needs
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Our services cover vehicle procurement, maintenance, route optimization,
                         and fuel management, ensuring peak performance and cost efficiency.
                    </p>
               </header>
               <AlternatingContentLayout content={arr} />
          </section>
     )
}

export default FleetSolutions
