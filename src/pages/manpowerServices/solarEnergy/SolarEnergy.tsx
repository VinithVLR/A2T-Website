import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import bgImage1 from '../../../assets/images/purpose/img_pur_bg1.png'
import bgImage2 from '../../../assets/images/purpose/img_pur_bg2.png'
import image1 from '../../../assets/images/man_power/img_slr_1.png'
import image2 from '../../../assets/images/man_power/img_slr_2.png'
import image3 from '../../../assets/images/man_power/img_slr_3.png'
import image4 from '../../../assets/images/man_power/img_slr_4.png'
import image5 from '../../../assets/images/man_power/img_slr_5.png'
import AlternatingContentLayout from '@/component/alternatingContentLayout/AlternatingContentLayout'

const SolarEnergy = () => {
     let arr: any = [
          {
               bgImage: bgImage1,
               img: image1,
               title: 'Operation & Maintenance (O&M) Technicians',
               description:
                    'Ensuring solar farm efficiency by performing preventive and corrective maintenance.',
               link: 'operation-&-maintenance-technicians',
          },
          {
               bgImage: bgImage2,
               img: image2,
               title: 'Electrical Engineers',
               description:
                    'Expertise in wiring, grid integration, and power distribution for solar energy systems.',
               link: 'electrical-engineers',
          },
          {
               bgImage: bgImage1,
               img: image3,
               title: 'Project Managers',
               description:
                    'Skilled in designing solar photovoltaic (PV) systems for residential, commercial, and utility-scale installations.',
               link: 'project-managers',
          },
          {
               bgImage: bgImage2,
               img: image4,
               title: 'Solar Design Engineers',
               description:
                    'Skilled in designing solar photovoltaic (PV) systems for residential, commercial, and utility-scale installations.',
               link: 'solar-design-engineers',
          },

          {
               bgImage: bgImage1,
               img: image5,
               title: 'Solar Installation Technicians',
               description:
                    'Certified technicians who install solar panels, inverters, and battery storage systems.',
               link: 'solar-installation-technicians',
          },
     ]
     return (
          <section
               id='solid-energy'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>Solar Energy</h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Project Managers, Solar Design Engineers, and Technicians handle solar
                         installations and ensure efficient energy production, while O&M Technicians
                         perform preventive maintenance for long-term solar farm efficiency.
                    </p>
               </header>
               <AlternatingContentLayout content={arr} />
          </section>
     )
}

export default SolarEnergy
