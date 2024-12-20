import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import cardImage1 from '../../../assets/images/man_power/img_test_ly1.png'
import cardImage2 from '../../../assets/images/man_power/img_test_ly2.png'
import Card from '@/pages/fleetmanagement/component/Card'
const ResearchTesting = () => {
     const researchArr = [
          {
               img: cardImage1,
               title: 'Predictive Maintenance Engineers',
               description:
                    'Skilled personnel for operating CNC machines, ensuring precision in manufacturing processes.',
          },
          {
               img: cardImage2,
               title: 'Equipment Maintenance Technicians',
               description:
                    'Skilled technicians for regular and corrective maintenance of manufacturing equipment.',
          },
     ]
     return (
          <section className={styles.main_container} style={{ backgroundColor: '#fff' }}>
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>R&D and Testing</h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Our Battery and Powertrain Testing Engineers specialize in testing EV
                         batteries, motors, and powertrains for durability and performance.
                         Simulation and Testing Engineers optimize EV system performance and safety
                         through advanced simulations.
                    </p>
               </header>
               <div className={styles.two_card_layout}>
                    {researchArr.map((item: any, index: any) => {
                         return (
                              <Card
                                   key={index}
                                   imageUrl={item.img}
                                   title={item.title}
                                   description={item.description}
                              />
                         )
                    })}
               </div>
          </section>
     )
}

export default ResearchTesting
