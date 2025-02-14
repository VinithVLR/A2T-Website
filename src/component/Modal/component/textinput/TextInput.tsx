import React from 'react'
import styles from './TextInput.module.scss'

interface TextInputProps {
     label?: string
     name?: string
     value: string
     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
     error?: string
     placeholder?: string
     suffix?: string // New suffix prop
}

const TextInput: React.FC<TextInputProps> = ({
     label,
     name,
     value,
     onChange,
     error,
     placeholder,
     suffix,
}) => {
     return (
          <div className={styles.inputContainer}>
               <label className={styles.label}>{label}</label>
               <div className={styles.inputWrapper}>
                    <input
                         type='text'
                         name={name}
                         value={value}
                         onChange={onChange}
                         placeholder={placeholder}
                         className={styles.input}
                    />
                    {suffix && <span className={styles.suffix}>{suffix}</span>}
               </div>
               {error && <p className={styles.error}>{error}</p>}
          </div>
     )
}

export default TextInput
