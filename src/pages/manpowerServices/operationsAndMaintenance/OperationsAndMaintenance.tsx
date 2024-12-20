import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import cardImage1 from '../../../assets/images/man_power/img_opr_ly1.png'
import cardImage2 from '../../../assets/images/man_power/img_opr_ly2.png'
import cardImage3 from '../../../assets/images/man_power/img_opr_ly3.png'

const OperationsAndMaintenance = () => {
     let operationArr = [
          {
               img: cardImage1,
               title: 'Instrumentation & Control Engineers',
               description: [
                    'Specialized in control systems for monitoring LNG processes and safety protocols',
                    'Skilled LNG OEM Technicians for Commercial Truck Maintenance',
               ],
          },
          {
               img: cardImage2,
               title: 'LNG Safety Experts',
               description:
                    'Professionals ensuring safety standards are followed during the storage and transport of LNG.',
          },
          {
               img: cardImage3,
               title: 'LNG Technicians',
               description: [
                    'Skilled in the operation of LNG terminals, pipelines, storage tanks, and regasification facilities.',
                    'Skilled LNG OEM Technicians for Commercial Truck Maintenance',
               ],
          },
     ]

     return (
          <section className={styles.main_container} style={{ backgroundColor: '#fff' }}>
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         LNG Operations & Maintenance
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         LNG Technicians manage operations at terminals and pipelines, while Safety
                         Experts ensure compliance with safety protocols and Control Engineers
                         handle LNG monitoring systems.
                    </p>
               </header>
               {operationArr.map((item: any, index: any) => (
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

export default OperationsAndMaintenance
