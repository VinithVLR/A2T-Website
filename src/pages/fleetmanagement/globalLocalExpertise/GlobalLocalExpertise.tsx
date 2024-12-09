import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import image1 from '../../../assets/images/fleet/img_glb_1.png'
import image2 from '../../../assets/images/fleet/img_glb_2.png'
import image3 from '../../../assets/images/fleet/img_glb_3.png'

const GlobalLocalExpertise = () => {
     let skillArr: any = [
          {
               img: image1,
               title: 'Local Expertise',
               description:
                    'Understanding regional requirements and tailoring solutions to fit local markets.',
          },
          {
               img: image2,
               title: 'International Standards',
               description:
                    ' Adherence to global logistics standards, ensuring reliability and trust.',
          },
          {
               img: image3,
               title: 'Network of Partnerships',
               description:
                    'Strong relationships with key logistics players and regulatory bodies for smooth operations.',
          },
     ]

     return (
          <section className={styles.main_container}>
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         Skilled Driver Training and Deployment
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Our Fleet Management School (Code 93) and Driver Development Centers (DDCs)
                         train drivers to excel in safety, efficiency, and compliance.
                    </p>
               </header>
               {skillArr.map((item: any, index: any) => (
                    <ImageDesc
                         key={item.id}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                         rowReverse={index % 2 !== 0}
                    />
               ))}
          </section>
     )
}

export default GlobalLocalExpertise
