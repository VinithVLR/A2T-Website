import React from 'react'
import Card from '../component/Card'
import cardImage1 from '../../../assets/images/fleet/img_card1.png'
import cardImage2 from '../../../assets/images/fleet/img_card2.png'
import cardImage3 from '../../../assets/images/fleet/img_card3.png'
import styles from '../../../scss/layout/common.module.scss'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const TechLogisticsOptimization = () => {
     let cardData = [
          {
               img: cardImage1,
               title: 'Route Optimization',
               description:
                    'AI-powered algorithms to find the most efficient routes, saving time and fuel.',
               link: 'route-optimization',
          },
          {
               img: cardImage2,
               title: 'Telematics and Analytics',
               description:
                    'Real-time data insights to enhance fleet performance and predict maintenance needs.',
               link: 'telematics-and-analytics',
          },
          {
               img: cardImage3,
               title: 'Digital Platforms',
               description:
                    'Cloud platforms for managing logistics, driver assignments, and compliance.',
               link: 'digital-platforms',
          },
     ]

     return (
          <section id='technology-driven-logistics-optimization' className={styles.main_container}>
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         Technology-Driven Logistics Optimization
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         Utilize AI-driven route optimization, telematics, and digital platforms for
                         enhanced logistics and reduced costs.
                    </MainPara>
               </header>
               <div className={styles.three_card_layout}>
                    {cardData.map((item: any, index: any) => {
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

export default TechLogisticsOptimization
