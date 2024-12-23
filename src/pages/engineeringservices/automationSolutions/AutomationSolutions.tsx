import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import image1 from '../../../assets/images/eng-ser/img_aut_ly1.png'
import image2 from '../../../assets/images/eng-ser/img_aut_ly2.png'
import Card from '@/pages/fleetmanagement/component/Card'

const AutomationSolutions = () => {
     const EngConArr = [
          {
               img: image1,
               title: 'Industrial Automation',
               link: 'industrial-automation',
               description: [
                    'Design, development, and implementation of automation systems for manufacturing plants.',
                    'Integration of robotics and automation in assembly lines for efficiency and productivity.',
               ],
          },
          {
               img: image2,
               title: 'Smart Manufacturing & Industry 4.0 Solutions',
               link: 'smart-manufacturing-&-industry-solutions',
               description: [
                    'IoT-enabled manufacturing systems for real-time monitoring and data analytics.',
                    'Implementation of artificial intelligence (AI) for predictive maintenance and quality control.',
               ],
          },
     ]

     return (
          <section
               id='automation-and-robotics-solutions'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         Automation and Robotics Solutions
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         We design and implement advanced automation systems, integrating robotics
                         to enhance efficiency and productivity in manufacturing.
                    </p>
               </header>
               <div className={styles.two_card_layout}>
                    {EngConArr.map((item: any, index: any) => {
                         return (
                              <Card
                                   key={index}
                                   imageUrl={item.img}
                                   title={item.title}
                                   description={item.description}
                                   link={item.link}
                              />
                         )
                    })}
               </div>
          </section>
     )
}

export default AutomationSolutions
