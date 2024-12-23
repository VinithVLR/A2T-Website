import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import Card from '@/pages/fleetmanagement/component/Card'
import cardImage1 from '../../../assets/images/man_power/img_reb_ly1.png'
import cardImage2 from '../../../assets/images/man_power/img_reb_ly2.png'

const MaintenanceReliability = () => {
     const reliabilityArr = [
          {
               img: cardImage1,
               title: 'Predictive Maintenance Engineers',
               link: 'predictive-maintenance-engineers',
               description:
                    'Skilled personnel for operating CNC machines, ensuring precision in manufacturing processes.',
          },
          {
               img: cardImage2,
               title: 'Equipment Maintenance Technicians',
               link: 'equipment-maintenance-technicians',
               description:
                    'Skilled technicians for regular and corrective maintenance of manufacturing equipment.',
          },
     ]
     return (
          <section
               id='maintenance-&-reliability-engineers'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         Maintenance & Reliability Engineers
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Predictive Maintenance Engineers use AI-driven diagnostics to anticipate
                         equipment failures, while Technicians ensure routine maintenance, reducing
                         downtime and improving equipment efficiency.
                    </p>
               </header>
               <div className={styles.two_card_layout}>
                    {reliabilityArr.map((item: any, index: any) => {
                         return (
                              <Card
                                   key={index}
                                   imageUrl={item.img}
                                   title={item.title}
                                   description={item.description}
                                   link={item.link}
                              />
                         )
                    })}
               </div>
          </section>
     )
}

export default MaintenanceReliability
