import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import image1 from '../../../assets/images/man_power/img_bio_ly1.png'
import image2 from '../../../assets/images/man_power/img_bio_ly2.png'
import image3 from '../../../assets/images/man_power/img_bio_ly3.png'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const BiomassEnergySolutions = () => {
     const bioEngyArr = [
          {
               img: image1,
               title: 'Process Engineers',
               description:
                    'Expertise in the design and operation of biomass and waste-to-energy plants.',
               link: 'process-engineers',
          },
          {
               img: image2,
               title: 'Biomass Plant Technicians',
               description:
                    'Skilled in the operation, maintenance, and repair of biomass energy systems.',
               link: 'biomass-plant-technicians',
          },
          {
               img: image3,
               title: 'Environmental Engineers',
               description:
                    'Specialized in assessing environmental impacts, ensuring sustainability, and compliance with regulations.',
               link: 'environmental-engineers',
          },
     ]
     return (
          <section
               id='biomass-&-waste-to-energy'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <MainHeading
                         style={{ paddingInlineEnd: '2rem' }}
                         className={`${styles.heading} ${styles.blackText}`}
                    >
                         Biomass & Waste-to-Energy
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         Process Engineers, Technicians, and Environmental Engineers manage biomass
                         energy production, plant operations, and compliance with sustainability
                         regulations, ensuring efficient waste-to-energy conversion.
                    </MainPara>
               </header>
               {bioEngyArr.map((item: any, index: any) => (
                    <ImageDesc
                         key={item.id}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                         link={item.link}
                         opacityAnimation={false}
                    />
               ))}
          </section>
     )
}

export default BiomassEnergySolutions
