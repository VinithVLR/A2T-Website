import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import cardImage1 from '../../../assets/images/man_power/img_test_ly1.png'
import cardImage2 from '../../../assets/images/man_power/img_test_ly2.png'
import Card from '@/pages/fleetmanagement/component/Card'
const ResearchTesting = () => {
     const researchArr = [
          {
               img: cardImage1,
               title: 'Battery and Powertrain Testing Engineers',
               link: 'battery-and-powertrain-testing-engineers',
               description:
                    'Specialists in testing EV components like batteries, motors, and powertrains for durability and performance.',
          },
          {
               img: cardImage2,
               title: 'Simulation and Testing Engineers',
               link: 'simulation-and-testing-engineers',
               description:
                    'Experts in the simulation of EV systems for performance optimization and safety testing.',
          },
     ]
     return (
          <section
               id='R&D-and-testing'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
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
                                   link={item.link}
                              />
                         )
                    })}
               </div>
          </section>
     )
}

export default ResearchTesting
