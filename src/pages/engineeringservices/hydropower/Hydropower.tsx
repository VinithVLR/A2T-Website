import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import Card from '@/pages/fleetmanagement/component/Card'
import cardImage1 from '../../../assets/images/eng-ser/img_hyr_ly1.png'
import cardImage2 from '../../../assets/images/eng-ser/img_hyr_ly2.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const Hydropower = () => {
     let hydroPowerData = [
          {
               img: cardImage1,
               title: 'Small & Micro Hydropower Plant Design',
               link: 'small-&-micro-hydropower-plant-design',
               description: [
                    'Engineering services for small hydropower projects (up to 25 MW).',
                    'Civil, mechanical, and electrical design for turbine systems and dams.',
               ],
          },
          {
               img: cardImage2,
               title: 'Operation and Maintenance Services',
               link: 'operation-and-maintenance-services',
               description: ['Long-term O&M services for hydropower plants.'],
          },
     ]

     return (
          <section
               id='hydropower'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         Hydropower
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         Our team specializes in small and micro-hydropower plant design and
                         long-term maintenance services, ensuring continuous energy production.
                    </MainPara>
               </header>
               <div className={styles.two_card_layout}>
                    {hydroPowerData.map((item: any, index: any) => {
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

export default Hydropower
