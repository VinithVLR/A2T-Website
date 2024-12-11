'use client'

import { useState } from 'react'
import styles from './FAQCard.module.scss'
import plusIcon from '../../../../assets/icons/ic_plus_open.svg'
import closeIcon from '../../../../assets/icons/ic_minus_close.svg'

function FAQCard({ data }: any) {
     const [isOpened, setIsOpened] = useState(false)
     return (
          <div className={`${styles.card} ${isOpened ? styles.active : ''}`}>
               <div className={styles.row}>
                    <h4>{data.question}</h4>
                    <button onClick={() => setIsOpened(!isOpened)}>
                         <img src={isOpened ? closeIcon.src : plusIcon.src} alt='' />
                    </button>
               </div>
               <div className={`${styles.ans}`}>{data.answer}</div>
          </div>
     )
}

export default FAQCard
