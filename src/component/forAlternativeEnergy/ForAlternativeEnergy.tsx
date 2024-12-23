import React from 'react'
import styles from './ForAlternativeEnergy.module.scss'
const ForAlternativeEnergy = ({ title, id }: any) => {
     return (
          <section id={id ? id : ''} className={styles.wrapper}>
               <div className={styles.text}>{title}</div>
          </section>
     )
}

export default ForAlternativeEnergy
