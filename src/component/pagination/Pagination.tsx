import React from 'react'
import styles from './Pagination.module.scss'
import arrowIcon from '../../assets/icons/ic_arrow.svg'
import Image from 'next/image'

interface PaginationProps {
     totalPage: number
     current: number
     onChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ totalPage, current, onChange }) => {
     const renderPageNumbers = () => {
          const pageNumbers: JSX.Element[] = []

          const addPageNumber = (page: number, label?: string) => {
               pageNumbers.push(
                    <div
                         key={page}
                         className={`${current === page ? styles.activePage : ''} ${styles.paginationBtn}`}
                         onClick={() => onChange(page)}
                    >
                         {label || page}
                    </div>,
               )
          }

          const addEllipsis = (key: string, targetPage: number) => {
               pageNumbers.push(
                    <div
                         key={key}
                         className={`${styles.ellipsis} ${styles.paginationBtn}`}
                         onClick={() => onChange(targetPage)}
                    >
                         ...
                    </div>,
               )
          }

          addPageNumber(1)

          let startPage = Math.max(2, current - 2)
          let endPage = Math.min(totalPage - 1, current + 2)

          if (current <= 3) {
               endPage = Math.min(5, totalPage - 1)
          } else if (current >= totalPage - 2) {
               startPage = Math.max(2, totalPage - 4)
          }

          if (startPage > 2) {
               addEllipsis('left-ellipsis', startPage - 2)
          }

          for (let i = startPage; i <= endPage; i++) {
               addPageNumber(i)
          }

          if (endPage < totalPage - 1) {
               addEllipsis('right-ellipsis', endPage + 2)
          }

          if (totalPage > 1) {
               addPageNumber(totalPage)
          }

          return pageNumbers
     }

     return (
          <div className={styles.paginationContainer}>
               <div
                    className={`${styles.prev} ${styles.paginationBtn}`}
                    onClick={() => current > 1 && onChange(current - 1)}
                    aria-disabled={current <= 1}
               >
                    <Image src={arrowIcon} alt='' />
               </div>

               {renderPageNumbers()}

               <div
                    className={`${styles.next} ${styles.paginationBtn}`}
                    onClick={() => current < totalPage && onChange(current + 1)}
                    aria-disabled={current >= totalPage}
               >
                    <Image src={arrowIcon} alt='' style={{ transform: 'rotate(180deg)' }} />
               </div>
          </div>
     )
}

export default Pagination
