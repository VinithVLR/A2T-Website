import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import Card from '@/pages/fleetmanagement/component/Card'
import cardImage1 from '../../../assets/images/eng-ser/img_man-sup_ly1.png'
import cardImage2 from '../../../assets/images/eng-ser/img_man-sup_ly2.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const MaintenanceSupport = () => {
     let MaintenanceData = [
          {
               img: cardImage1,
               title: 'Predictive Maintenance Solutions',
               link: 'predictive-maintenance-solutions',
               description: [
                    'Implementation of predictive maintenance using AI and machine learning to reduce downtime.',
               ],
          },
          {
               img: cardImage2,
               title: 'Field Service and Remote Monitoring',
               link: 'field-service-and-remote-monitoring',
               description: [
                    'Offering on-site maintenance and remote diagnostic services for manufacturing machinery.',
               ],
          },
     ]
     return (
          <section
               id='maintenance-&-support-services-for-ports'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         Maintenance & Support Services for Ports, Automotive & Aviation
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         We use AI and machine learning to offer predictive maintenance and field
                         service solutions, reducing downtime and improving operational efficiency.
                    </MainPara>
               </header>
               <div className={styles.two_card_layout}>
                    {MaintenanceData.map((item: any, index: any) => {
                         return (
                              <Card
                                   key={index}
                                   imageUrl={item.img}
                                   title={item.title}
                                   description={item.description}
                                   link={item.link}
                                   index={index}
                              />
                         )
                    })}
               </div>
          </section>
     )
}

export default MaintenanceSupport
