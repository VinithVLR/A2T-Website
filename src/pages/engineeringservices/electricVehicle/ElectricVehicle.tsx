import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import Card from '@/pages/fleetmanagement/component/Card'
import cardImage1 from '../../../assets/images/eng-ser/img_ev_ly1.png'
import cardImage2 from '../../../assets/images/eng-ser/img_ev_ly2.png'

const ElectricVehicle = () => {
     let electricVehicleData = [
          {
               img: cardImage1,
               title: 'EV ready Technicians',
               link: 'EV-ready-technicians',
               description: 'Comprehensive evaluation of Scope 1, 2, and 3 emissions.',
          },
          {
               img: cardImage2,
               title: 'Operations and Maintenance of EV',
               link: 'operations-and-maintenance-of-EV',
               description: 'Strategies to minimize carbon footprint and achieve net-zero goals.',
          },
     ]

     return (
          <section
               id='electric-vehicle'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>Electric Vehicle</h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         From installing charging infrastructure to maintaining EV fleets, our
                         EV-ready technicians are at the forefront of electric vehicle technology.
                    </p>
               </header>
               <div className={styles.two_card_layout}>
                    {electricVehicleData.map((item: any, index: any) => {
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

export default ElectricVehicle
