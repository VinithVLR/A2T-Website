import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import cardImage1 from '../../../assets/images/man_power/img_evi_ly1.png'
import cardImage2 from '../../../assets/images/man_power/img_evi_ly2.png'
const EvChargingInfrastructure = () => {
     let evArr = [
          {
               img: cardImage1,
               title: 'EV Charging Station Technicians',
               link: 'EV-charging-station-technicians',
               description:
                    'Technicians specialized in the installation, maintenance, and repair of EV charging stations.',
          },
          {
               img: cardImage2,
               title: 'Electrical Engineers for Charging Networks',
               link: 'electrical-engineers-for-charging-networks',
               description:
                    'Engineers who design and maintain the electrical infrastructure for large-scale EV charging networks.',
          },
     ]

     return (
          <section
               id='EV-charging-infrastructure'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         EV Charging Infrastructure
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Our EV Charging Station Technicians handle installation and maintenance,
                         while Electrical Engineers design and maintain large-scale EV charging
                         networks for reliable and efficient electric vehicle infrastructure.
                    </p>
               </header>
               {evArr.map((item: any, index: any) => (
                    <ImageDesc
                         key={item.id}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                         rowReverse={index % 2 !== 0}
                         link={item.link}
                    />
               ))}
          </section>
     )
}

export default EvChargingInfrastructure
