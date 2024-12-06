import React from 'react'
import styles from './SkilledDriverProgram.module.scss'
import image1 from '../../../assets/images/purpose/img_pur_1.png'
import image2 from '../../../assets/images/purpose/img_pur_2.png'
import image3 from '../../../assets/images/purpose/img_pur_3.png'
import image4 from '../../../assets/images/purpose/img_pur_4.png'
import ImageDesc from '@/component/imageDesc/ImageDesc'
const SkilledDriverProgram = () => {
     let arr: any = [
          {
               img: image1,
               title: 'Innovation',
               description:
                    'We are committed to fostering a culture of innovation, continuously seeking new ways to improve and enhance our services',
          },
          {
               img: image2,
               title: 'Sustainability Commitment',
               description:
                    'It is at the heart of everything we do, from our services to our operations, ensuring a positive impact on the environment and society.',
          },
          {
               img: image3,
               title: 'Integrity',
               description:
                    'We believe in conducting business with the highest level of integrity, building trust with our clients and partners.',
          },
          {
               img: image4,
               title: 'Collaboration',
               description:
                    'We value collaboration and teamwork, working closely with our clients to achieve shared success.',
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
               {arr.map((item: any, index: any) => (
                    <ImageDesc
                         key={item.id}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                    />
               ))}
          </section>
     )
}

export default SkilledDriverProgram
