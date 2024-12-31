import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import cardImage1 from '../../../assets/images/man_power/img_engCon_ly1.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'
const EngineeringConsulting = () => {
     const consultingArr = [
          {
               img: cardImage1,
               title: 'Engineering Consultants',
               link: 'engineering-consultants',
               description:
                    'Offering expertise across renewable energy, LNG, EV, and manufacturing, providing advisory services and feasibility studies.',
          },
     ]
     return (
          <section
               id='engineering-consulting-services'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         Engineering Consulting Services
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         Our Engineering Consultants offer expert advice across renewable energy,
                         LNG, electric vehicles, and manufacturing, helping clients optimize
                         operations and execute feasibility studies.
                    </MainPara>
               </header>
               {consultingArr.map((item: any, index: any) => (
                    <ImageDesc
                         key={item.id}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                         link={item.link}
                         opacityAnimation={false}
                    />
               ))}
          </section>
     )
}

export default EngineeringConsulting
