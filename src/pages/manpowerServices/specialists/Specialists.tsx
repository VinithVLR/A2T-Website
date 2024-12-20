import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import cardImage1 from '../../../assets/images/man_power/img_hse_ly1.png'
import cardImage2 from '../../../assets/images/man_power/img_hse_ly2.png'

const Specialists = () => {
     let skillWorkArr = [
          {
               img: cardImage1,
               title: 'HSE Managers',
               description:
                    'Ensuring compliance with environmental and safety standards in renewable energy plants, LNG terminals, and manufacturing sites.',
          },
          {
               img: cardImage2,
               title: 'Safety Officers',
               description:
                    'Providing on-site safety oversight, risk assessments, and compliance with occupational health and safety regulations.',
          },
     ]
     return (
          <section className={styles.main_container} style={{ backgroundColor: '#fff' }}>
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         HSE (Health, Safety, and Environmental) Specialists
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Our HSE Managers and Safety Officers ensure environmental and safety
                         compliance, performing on-site risk assessments and ensuring adherence to
                         regulations.
                    </p>
               </header>
               {skillWorkArr.map((item: any, index: any) => (
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

export default Specialists
