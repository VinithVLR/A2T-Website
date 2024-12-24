import React from 'react'
import AlternatingContentLayout from '@/component/alternatingContentLayout/AlternatingContentLayout'
import styles from '../../../scss/layout/common.module.scss'
import bgImage1 from '../../../assets/images/purpose/img_pur_bg1.png'
import bgImage2 from '../../../assets/images/purpose/img_pur_bg2.png'
import image1 from '../../../assets/images/eng-ser/img_material_ly1.png'
import image2 from '../../../assets/images/eng-ser/img_material_ly2.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const MaterialsEngineering = () => {
     let arr: any = [
          {
               bgImage: bgImage1,
               img: image1,
               title: 'Advanced Materials Development',
               link: 'advanced-materials-development',
               description: [
                    'Research and development of lightweight materials (composites, alloys) for energy-efficient products.',
               ],
          },
          {
               bgImage: bgImage2,
               img: image2,
               title: 'Sustainable Manufacturing Solutions',
               link: 'sustainable-manufacturing-solutions',
               description:
                    'Adoption of green materials and processes to reduce environmental impact.',
          },
     ]
     return (
          <section
               id='materials-engineering'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         Materials Engineering
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         We develop lightweight and sustainable materials, such as composites and
                         alloys, for energy-efficient products.
                    </MainPara>
               </header>
               <AlternatingContentLayout content={arr} />
          </section>
     )
}

export default MaterialsEngineering
