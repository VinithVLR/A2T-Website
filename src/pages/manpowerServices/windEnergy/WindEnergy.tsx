import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import image1 from '../../../assets/images/man_power/img_win_ly1.png'
import image2 from '../../../assets/images/man_power/img_win_ly2.png'
import image3 from '../../../assets/images/man_power/img_win_ly3.png'
import ImageDesc from '@/component/imageDesc/ImageDesc'
const WindEnergy = () => {
     const windEnergyArr = [
          {
               img: image1,
               title: 'Wind Energy Engineers',
               description:
                    'Experts in wind turbine technology, wind farm layout design, and optimization.',
               link: 'wind-energy-engineers',
          },
          {
               img: image2,
               title: 'Wind Farm Technicians',
               description:
                    'Trained in turbine operation, regular maintenance, and troubleshooting.',
               link: 'wind-farm-technicians',
          },
          {
               img: image3,
               title: 'Turbine Installation Specialists',
               description:
                    'Skilled personnel for erecting and installing wind turbines and related electrical systems.',
               link: 'turbine-installation-specialists',
          },
     ]
     return (
          <section
               id='wind-energy'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>Wind energy</h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Project Managers, Solar Design Engineers, and Technicians handle solar
                         installations and ensure efficient energy production, while O&M Technicians
                         perform preventive maintenance for long-term solar farm efficiency.
                    </p>
               </header>
               {windEnergyArr.map((item: any, index: any) => (
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

export default WindEnergy
