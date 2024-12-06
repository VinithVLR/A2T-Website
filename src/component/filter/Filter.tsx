import React from 'react'
import styles from './Filter.module.scss'

const Filter = ({ options, onChange }: any) => {
     const onFilterChange = (value: string) => {
          onChange(
               options.map((option: any) => {
                    return { ...option, active: option.value == value }
               }),
          )
     }
     return (
          <ul className={styles.container}>
               {options.map((option: any) => {
                    return (
                         <li
                              key={option.value}
                              onClick={() => onFilterChange(option.value)}
                              className={option.active ? styles.active : ''}
                         >
                              {option.title}
                         </li>
                    )
               })}
          </ul>
     )
}

export default Filter
