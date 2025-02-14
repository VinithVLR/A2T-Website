import { useState } from 'react'
import styles from './CountInput.module.scss'

interface CounterInputProps {
     label: string
     value?: any
     onChange?: any
}

const CounterInput: React.FC<CounterInputProps> = ({ label, value, onChange }) => {
     const handleIncrement = (e: React.MouseEvent) => {
          e.stopPropagation()
          e.preventDefault()
          onChange(value + 1)
     }

     const handleDecrement = (e: React.MouseEvent) => {
          e.stopPropagation()
          e.preventDefault()
          onChange(value > 0 ? value - 1 : 0)
     }
     return (
          <div className={styles.counterContainer}>
               <label className={styles.label}>{label}</label>
               <div className={styles.counterBox}>
                    <button
                         onClick={handleDecrement}
                         className={styles.button}
                         style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}
                    >
                         -
                    </button>
                    <span className={styles.value}>{value.toString().padStart(2, '0')}</span>
                    <button
                         onClick={handleIncrement}
                         className={styles.button}
                         style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}
                    >
                         +
                    </button>
               </div>
          </div>
     )
}

export default CounterInput
