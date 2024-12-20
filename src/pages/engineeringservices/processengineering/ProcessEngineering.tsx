import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import image1 from '../../../assets/images/eng-ser/img_prc_ly1.png'
import image2 from '../../../assets/images/eng-ser/img_prc_ly2.png'

const ProcessEngineering = () => {
     const processEngData = [
          {
               img: image1,
               title: 'Lean Manufacturing Consulting',
               description:
                    'Implementing lean principles to eliminate waste and optimize manufacturing processes.',
          },
          {
               img: image2,
               title: 'Six Sigma & Quality Engineering',
               description: [
                    'Process improvement strategies using Six Sigma methodology to improve product quality and reduce defects.',
               ],
          },
     ]
     return (
          <section className={styles.main_container} style={{ backgroundColor: '#fff' }}>
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         Energy Efficiency and Sustainability Consulting
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         We conduct energy audits, provide energy management system implementation,
                         and offer carbon reduction strategies to help industries reduce their
                         environmental impact.
                    </p>
               </header>
               {processEngData.map((item: any, index: any) => (
                    <ImageDesc
                         key={item.id}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                         rowReverse={index % 2 !== 0}
                         label={item.label}
                    />
               ))}
          </section>
     )
}

export default ProcessEngineering
