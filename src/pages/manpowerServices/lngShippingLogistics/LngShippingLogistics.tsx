import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import Card from '@/pages/fleetmanagement/component/Card'
import cardImage1 from '../../../assets/images/man_power/img_shp_card1.png'
import cardImage2 from '../../../assets/images/man_power/img_shp_card2.png'

const LngShippingLogistics = () => {
     const hydroPowerData = [
          {
               img: cardImage1,
               title: 'Marine Engineers and Crew',
               link: 'marine-engineers-and-crew',
               description:
                    'Personnel with expertise in LNG tanker operations, shipping logistics, and safe handling of LNG cargo.',
          },
          {
               img: cardImage2,
               title: 'Logistics and Supply Chain Managers',
               link: 'Logistics and Supply Chain Managers',
               description:
                    'Ensuring efficient supply chain management for LNG distribution across regions.LNG Certified Commercial Fleet Operators',
          },
     ]
     return (
          <section
               id='LNG-shipping-and-logistics-personnel'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         LNG Shipping and Logistics Personnel
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Marine Engineers and Logistics Managers oversee safe LNG cargo handling and
                         supply chain management, ensuring efficient LNG distribution across
                         regions.
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
                                   link={item.link}
                              />
                         )
                    })}
               </div>
          </section>
     )
}

export default LngShippingLogistics
