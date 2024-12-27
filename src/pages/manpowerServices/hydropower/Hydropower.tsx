import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import Card from '@/pages/fleetmanagement/component/Card'
import cardImage1 from '../../../assets/images/man_power/img_hyr_1.png'
import cardImage2 from '../../../assets/images/man_power/img_hyr_2.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const Hydropower = () => {
     let hydroPowerData = [
          {
               img: cardImage1,
               title: 'Hydropower Engineers',
               description:
                    'Engineers with experience in civil, mechanical, and electrical aspects of small and large hydropower plants.',
               link: 'hydropower-engineers',
          },
          {
               img: cardImage2,
               title: 'Hydropower Maintenance Technicians',
               description: 'Manpower for the regular upkeep and monitoring of hydropower systems.',
               link: 'hydropower-maintenance-technicians',
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
                         Our Hydropower Engineers specialize in plant design and O&M Technicians
                         maintain and monitor hydropower systems to ensure continuous and efficient
                         energy production.
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
