import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import Card from '@/pages/fleetmanagement/component/Card'
import cardImage1 from '../../../assets/images/eng-ser/img_hyr_ly1.png'
import cardImage2 from '../../../assets/images/eng-ser/img_hyr_ly2.png'

const Hydropower = () => {
     let hydroPowerData = [
          {
               img: cardImage1,
               title: 'Small & Micro Hydropower Plant Design',
               description: [
                    'Engineering services for small hydropower projects (up to 25 MW).',
                    'Civil, mechanical, and electrical design for turbine systems and dams.',
               ],
          },
          {
               img: cardImage2,
               title: 'Operation and Maintenance Services',
               description: ['Long-term O&M services for hydropower plants.'],
          },
     ]

     return (
          <section className={styles.main_container} style={{ backgroundColor: '#fff' }}>
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>Hydropower</h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Our team specializes in small and micro-hydropower plant design and
                         long-term maintenance services, ensuring continuous energy production.
                    </p>
               </header>
               <div className={styles.two_card_layout}>
                    {hydroPowerData.map((item: any, index: any) => {
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

export default Hydropower
