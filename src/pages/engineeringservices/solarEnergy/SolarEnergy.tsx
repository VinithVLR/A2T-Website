import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import image1 from '../../../assets/images/eng-ser/img_solarEn_ly1.png'
import image2 from '../../../assets/images/eng-ser/img_solarEn_ly2.png'
import image3 from '../../../assets/images/eng-ser/img_solarEn_ly3.png'
import image4 from '../../../assets/images/eng-ser/img_solarEn_ly4.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const SolarEnergy = () => {
     const solarArr = [
          {
               img: image1,
               title: 'Design and Development of Solar Power Plants',
               link: 'design-and-development-of-solar-power-plants',
               description: [
                    'End-to-end design and project development of utility-scale solar power plants.',
                    'Solar PV system design for residential, commercial, and industrial rooftops.',
               ],
          },
          {
               img: image2,
               title: 'Solar Farm EPC',
               link: 'solar-farm-EPC',
               label: '(Engineering, Procurement, and Construction)',
               description: [
                    'Procurement and installation of solar panels, inverters, and related equipment.',
                    'Civil, structural, and electrical engineering solutions for solar projects.',
               ],
          },
          {
               img: image3,
               title: 'Energy Storage Solutions',
               link: 'energy-storage-solutions',
               description: [
                    'Integration of battery energy storage systems (BESS) with solar projects.',
                    'Design and implementation of hybrid solar systems.',
               ],
          },
          {
               img: image4,
               title: 'Operation & Maintenance',
               link: 'operation-&-maintenance',
               description: 'Monitoring, troubleshooting, and maintaining solar energy systems.',
          },
     ]
     return (
          <section
               id='solar-energy'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         Solar Energy
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         Project Managers, Solar Design Engineers, and Technicians handle solar
                         installations and ensure efficient energy production, while O&M Technicians
                         perform preventive maintenance for long-term solar farm efficiency.
                    </MainPara>
               </header>
               {solarArr.map((item: any, index: any) => (
                    <ImageDesc
                         key={item.id}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                         rowReverse={index % 2 !== 0}
                         label={item.label}
                         link={item.link}
                         opacityAnimation={true}
                    />
               ))}
          </section>
     )
}

export default SolarEnergy
