import React from 'react'
import image1 from '../../../assets/images/fleet/img_skil_1.png'
import image2 from '../../../assets/images/fleet/img_skil_2.png'
import image3 from '../../../assets/images/fleet/img_skil_3.png'
import styles from '../../../scss/layout/common.module.scss'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import { MainHeading, MainPara } from '@/component/typography/Typography'
const SkilledDriverProgram = () => {
     let skillArr: any = [
          {
               img: image1,
               title: 'Fleet Management School (Code 93)',
               description:
                    'Advanced training programs for drivers to meet European and global logistics standards.',
               link: 'fleet-management-school',
          },
          {
               img: image2,
               title: 'Driver Safety and Compliance',
               description:
                    'Focused training on safety protocols, regulatory compliance, and efficient driving practices.',
               link: 'driver-safety-and-compliance',
          },
          {
               img: image3,
               title: 'Driver Development Centers (DDCs)',
               description: 'Centers for continuous learning and skill enhancement for drivers.',
               link: 'driver-development-centers',
          },
     ]

     return (
          <section id='driver-training' className={styles.main_container}>
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         Skilled Driver Training and Deployment
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         Our Fleet Management School (Code 93) and Driver Development Centers (DDCs)
                         train drivers to excel in safety, efficiency, and compliance.
                    </MainPara>
               </header>
               {skillArr.map((item: any, index: any) => (
                    <ImageDesc
                         key={item.id}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                         rowReverse={index % 2 !== 0}
                         link={item.link}
                         opacityAnimation={true}
                    />
               ))}
          </section>
     )
}

export default SkilledDriverProgram
