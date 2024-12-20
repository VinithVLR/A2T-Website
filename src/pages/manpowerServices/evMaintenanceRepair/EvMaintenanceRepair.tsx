import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import cardImage1 from '../../../assets/images/man_power/img_rep_ly1.png'
import cardImage2 from '../../../assets/images/man_power/img_rep_ly2.png'
import ImageDesc from '@/component/imageDesc/ImageDesc'

const EvMaintenanceRepair = () => {
     let operationArr = [
          {
               img: cardImage1,
               title: 'EV Maintenance Technicians',
               description:
                    'Trained professionals for diagnosing, maintaining, and repairing electric vehicles, including battery diagnostics.',
          },
          {
               img: cardImage2,
               title: 'EV Software Engineers',
               description:
                    'Experts in software development and integration for EV management systems, including telemetry and energy management.',
          },
     ]

     return (
          <section className={styles.main_container} style={{ backgroundColor: '#fff' }}>
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         EV Maintenance and Repair
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Our EV Maintenance Technicians diagnose and repair EV systems, while EV
                         Software Engineers develop and integrate management systems for smooth
                         vehicle telemetry and energy diagnostics.
                    </p>
               </header>
               {operationArr.map((item: any, index: any) => (
                    <ImageDesc
                         key={item.id}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                    />
               ))}
          </section>
     )
}

export default EvMaintenanceRepair
