import React from 'react'
import styles from './InnovationAndExcellence.module.scss'
import AlternatingContentLayout from '@/component/alternatingContentLayout/AlternatingContentLayout'
import bgImage1 from '../../../assets/images/purpose/img_pur_bg1.png'
import image1 from '../../../assets/images/purpose/img_pur_1.png'
import bgImage2 from '../../../assets/images/purpose/img_pur_bg2.png'
import image2 from '../../../assets/images/purpose/img_pur_2.png'
import bgImage3 from '../../../assets/images/purpose/img_pur_bg3.png'
import image3 from '../../../assets/images/purpose/img_pur_3.png'
import bgImage4 from '../../../assets/images/purpose/img_pur_bg4.png'
import image4 from '../../../assets/images/purpose/img_pur_4.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const InnovationAndExcellence = () => {
     let arr: any = [
          {
               bgImage: bgImage1,
               img: image1,
               title: 'Innovation',
               description:
                    'We are committed to fostering a culture of innovation, continuously seeking new ways to improve and enhance our services',
          },
          {
               bgImage: bgImage2,
               img: image2,
               title: 'Sustainability',
               description:
                    'It is at the heart of everything we do, from our services to our operations, ensuring a positive impact on the environment and society.',
          },
          {
               bgImage: bgImage3,
               img: image3,
               title: 'Integrity',
               description:
                    'We believe in conducting business with the highest level of integrity, building trust with our clients and partners.',
          },
          {
               bgImage: bgImage4,
               img: image4,
               title: 'Collaboration',
               description:
                    'We value collaboration and teamwork, working closely with our clients to achieve shared success.',
          },
     ]
     return (
          <section className={`${styles.innovationAndExcellence_con}`}>
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         Our Values Drive Innovation, Partnership, & Excellence Forward
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         From skilled manpower solutions to sustainable engineering and business
                         consulting, our comprehensive services are designed to meet the evolving
                         needs of industries worldwide.
                    </MainPara>
               </header>
               <AlternatingContentLayout content={arr} />
          </section>
     )
}

export default InnovationAndExcellence
