import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import Card from '@/pages/fleetmanagement/component/Card'
import cardImage1 from '../../../assets/images/eng-ser/img_man-sup_ly1.png'
import cardImage2 from '../../../assets/images/eng-ser/img_man-sup_ly2.png'

const MaintenanceSupport = () => {
     let MaintenanceData = [
          {
               img: cardImage1,
               title: 'Predictive Maintenance Solutions',
               description: [
                    'Implementation of predictive maintenance using AI and machine learning to reduce downtime.',
               ],
          },
          {
               img: cardImage2,
               title: 'Field Service and Remote Monitoring',
               description: [
                    'Offering on-site maintenance and remote diagnostic services for manufacturing machinery.',
               ],
          },
     ]
     return (
          <section className={styles.main_container} style={{ backgroundColor: '#fff' }}>
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>Electric Vehicle</h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         From installing charging infrastructure to maintaining EV fleets, our
                         EV-ready technicians are at the forefront of electric vehicle technology.
                    </p>
               </header>
               <div className={styles.two_card_layout}>
                    {MaintenanceData.map((item: any, index: any) => {
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

export default MaintenanceSupport
