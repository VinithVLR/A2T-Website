import React from 'react'
import styles from './Filter.module.scss'
import { MainPara } from '../typography/Typography'

const Filter = ({ options, onChange, style }: any) => {
     const onFilterChange = (value: string) => {
          onChange(
               options.map((option: any) => {
                    return { ...option, active: option.value == value }
               }),
          )
     }
     return (
          <ul className={styles.container} style={{ ...style }}>
               {options.map((option: any) => {
                    return (
                         <li
                              key={option.value}
                              onClick={() => onFilterChange(option.value)}
                              className={option.active ? styles.active : ''}
                         >
                              <MainPara>{option.title}</MainPara>
                         </li>
                    )
               })}
          </ul>
     )
}

export default Filter
