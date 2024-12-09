import React from 'react'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import image1 from '../../../assets/images/fleet/img_safe.png'
import image2 from '../../../assets/images/fleet/img_esg.png'
import image3 from '../../../assets/images/fleet/img_com.png'
import styles from '../../../scss/layout/common.module.scss'

const SustainableFleetFocus = () => {
     let skillArr: any = [
          {
               img: image1,
               title: 'Fleet Management School (Code 93)',
               description:
                    'Advanced training programs for drivers to meet European and global logistics standards.',
          },
          {
               img: image2,
               title: 'Driver Safety and Compliance',
               description:
                    'Focused training on safety protocols, regulatory compliance, and efficient driving practices.',
          },
          {
               img: image3,
               title: 'Driver Development Centers (DDCs)',
               description: 'Centers for continuous learning and skill enhancement for drivers.',
          },
     ]
     return (
          <section className={styles.main_container}>
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         Focus on Safety, Compliance, & Sustainability
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         We prioritize safety, sustainability, and compliance to meet regulatory
                         standards and reduce environmental impact.
                    </p>
               </header>
               {skillArr.map((item: any, index: any) => (
                    <ImageDesc
                         key={index}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                         style={{ paddingBlock: '2rem' }}
                    />
               ))}
          </section>
     )
}

export default SustainableFleetFocus
