import React from 'react'
import styles from './SearchInput.module.scss'

const SearchInput = ({ placeHolder, style }: any) => {
     return (
          <div className={`${styles.maincontainer} ${style}`}>
               <input placeholder={placeHolder} />
               <button>Search</button>
          </div>
     )
}

export default SearchInput
