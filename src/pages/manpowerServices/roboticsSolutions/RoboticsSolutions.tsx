import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import Card from '@/pages/fleetmanagement/component/Card'
import cardImage1 from '../../../assets/images/man_power/img_aut_ly1.png'
import cardImage2 from '../../../assets/images/man_power/img_aut_ly2.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const RoboticsSolutions = () => {
     let roboticsData = [
          {
               img: cardImage1,
               title: 'Automation Engineers',
               description:
                    'Specialists in PLC programming, SCADA systems, and automation technologies for smart factories.',
               link: 'automation-engineers',
          },
          {
               img: cardImage2,
               title: 'Robotics Engineers',
               description:
                    'Experts in the integration and maintenance of robotic systems for assembly lines, material handling, and production processes.',
               link: 'robotics-engineers',
          },
     ]

     return (
          <section
               id='automation-&-robotics'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         Automation & Robotics
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         Automation Engineers and Robotics Engineers specialize in automating
                         factory processes and integrating robotic systems for improved production
                         efficiency and precision.
                    </MainPara>
               </header>
               <div className={styles.two_card_layout}>
                    {roboticsData.map((item: any, index: any) => {
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

export default RoboticsSolutions
