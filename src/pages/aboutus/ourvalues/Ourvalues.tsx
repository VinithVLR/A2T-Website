import React from 'react'
import styles from './OurValues.module.scss'
import AlternatingContentLayout from '@/component/alternatingContentLayout/AlternatingContentLayout'
const Ourvalues = () => {
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
               <AlternatingContentLayout />
          </section>
     )
}

export default Ourvalues
