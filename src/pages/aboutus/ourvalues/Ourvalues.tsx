import React from 'react'
import styles from './OurValues.module.scss'
import AlternatingContentLayout from '@/component/alternatingContentLayout/AlternatingContentLayout'
const Ourvalues = () => {
     let arr: any = [
          {
               title: 'Innovation',
               description:
                    'We are committed to fostering a culture of innovation, continuously seeking new ways to improve and enhance our services',
          },
          {
               title: 'Sustainability Commitment',
               description:
                    'It is at the heart of everything we do, from our services to our operations, ensuring a positive impact on the environment and society.',
          },
          {
               title: 'Integrity',
               description:
                    'We believe in conducting business with the highest level of integrity, building trust with our clients and partners.',
          },
          {
               title: 'Collaboration',
               description:
                    'We value collaboration and teamwork, working closely with our clients to achieve shared success.',
          },
     ]
     return (
          <section className={styles.main_container}>
               <header className={`${styles.flex_con}`}>
                    <h3 className={`${styles.heading} ${styles.blackText}`}>
                         Driving Innovation and Efficiency Across Every Service We Offer
                    </h3>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         From skilled manpower solutions to sustainable engineering and business
                         consulting, our comprehensive services are designed to meet the evolving
                         needs of industries worldwide.
                    </p>
               </header>
               <AlternatingContentLayout content={arr} />
          </section>
     )
}

export default Ourvalues
