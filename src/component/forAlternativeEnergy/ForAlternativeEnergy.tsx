import React from 'react'
import styles from './ForAlternativeEnergy.module.scss'
const ForAlternativeEnergy = ({ title }: any) => {
     return (
          <section className={styles.wrapper}>
               <div className={styles.text}>{title}</div>
          </section>
     )
}

export default ForAlternativeEnergy
