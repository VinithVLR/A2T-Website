import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import bgImage1 from '../../../assets/images/purpose/img_pur_bg1.png'
import bgImage2 from '../../../assets/images/purpose/img_pur_bg2.png'
import image1 from '../../../assets/images/man_power/img_plant_ly1.png'
import image2 from '../../../assets/images/man_power/img_plant_ly2.png'
import image3 from '../../../assets/images/man_power/img_plant_ly3.png'
import AlternatingContentLayout from '@/component/alternatingContentLayout/AlternatingContentLayout'
import { MainHeading, MainPara } from '@/component/typography/Typography'
const PlantConstruction = () => {
     let arr: any = [
          {
               bgImage: bgImage1,
               img: image1,
               title: 'Construction Engineers',
               link: 'construction-engineers',
               description:
                    'Managing civil, mechanical, and electrical aspects of LNG plant construction.',
          },
          {
               bgImage: bgImage2,
               img: image2,
               title: 'Process Engineers',
               link: 'process-engineers',
               description:
                    'Specializing in LNG processing, liquefaction, and regasification technologies.',
          },
          {
               bgImage: bgImage1,
               img: image3,
               title: 'Project Managers',
               link: 'project-managers',
               description:
                    'Leading the construction, commissioning, and start-up phases of LNG terminals and facilities.',
          },
     ]
     return (
          <section
               id='LNG-plant-construction-&-commissioning'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         LNG Plant Construction & Commissioning
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         Our Project Managers, Process Engineers, and Construction Engineers manage
                         LNG plant construction, overseeing liquefaction, regasification, and plant
                         development with a focus on efficiency and safety.
                    </MainPara>
               </header>
               <AlternatingContentLayout content={arr} />
          </section>
     )
}

export default PlantConstruction
