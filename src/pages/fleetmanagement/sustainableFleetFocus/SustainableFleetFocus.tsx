import React from 'react'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import image1 from '../../../assets/images/fleet/img_safe.png'
import image2 from '../../../assets/images/fleet/img_esg.png'
import image3 from '../../../assets/images/fleet/img_com.png'
import styles from '../../../scss/layout/common.module.scss'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const SustainableFleetFocus = () => {
     let skillArr: any = [
          {
               img: image1,
               title: 'Safety Protocols',
               description:
                    'Implementation of comprehensive safety measures, training, and monitoring.',
               link: 'safety-protocols',
          },
          {
               img: image2,
               title: 'ESG Integration',
               description: 'Aligning fleet management with ESG goals for sustainability',
               link: 'ESG-integration',
          },
          {
               img: image3,
               title: 'Compliance Assurance',
               description:
                    'Ensuring all logistics activities meet local and international regulations.',
               link: 'compliance-assurance',
          },
     ]
     return (
          <section
               id='Safety-Compliance-&-Sustainability'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         Focus on Safety, Compliance & Sustainability
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         We prioritize safety, sustainability, and compliance to meet regulatory
                         standards and reduce environmental impact.
                    </MainPara>
               </header>
               {skillArr.map((item: any, index: any) => (
                    <ImageDesc
                         key={index}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                         style={{ paddingBlock: '2rem' }}
                         link={item.link}
                         opacityAnimation={false}
                    />
               ))}
          </section>
     )
}

export default SustainableFleetFocus
