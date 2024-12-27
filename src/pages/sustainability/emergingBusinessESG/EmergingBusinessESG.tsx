import React from 'react'
import styles from './EmergingBusinessESG.module.scss'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import image1 from '../../../assets/images/Sustainability/img_des_1.png'
import image2 from '../../../assets/images/Sustainability/img_des_2.png'
import image3 from '../../../assets/images/Sustainability/img_des_3.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const EmergingBusinessESG = () => {
     let businessArr: any = [
          {
               img: image1,
               title: 'Customized ESG Policy Development',
               description: "Tailored strategies that reflect the startup's vision and values.",
               link: 'customized-ESG-policy-development',
          },
          {
               img: image2,
               title: 'Impact Measurement',
               description:
                    'Tools and metrics to track and communicate sustainability efforts effectively.',
               link: 'impact-measurement',
          },
          {
               img: image3,
               title: 'Investor and Stakeholder Alignment',
               description:
                    'Creating ESG reports that meet investor expectations and regulatory requirements.',
               link: 'investor-and-stakeholder-alignment',
          },
     ]
     return (
          <section id='strong-ESG-foundation' className={`${styles.main_con}`}>
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         For Emerging Businesses, Building a Strong ESG Foundation
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         For startups, embedding ESG principles early offers a strategic advantage.
                         Our customized ESG strategies help new businesses create sustainable models
                         that attract investors and drive growth.
                    </MainPara>
               </header>

               {businessArr.map((item: any, index: any) => (
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

export default EmergingBusinessESG
