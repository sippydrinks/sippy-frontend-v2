import React from 'react'
import { usePagination } from '@/hooks'
import styles from './Pagination.module.scss'

const Pagination = ({pageSize, totalCount, theme, setCurrentPage, currentPage}: any) => {
    const siblingCount = 1
    const paginationRange = usePagination({
        totalCount,
        pageSize,
        theme,
        setCurrentPage,
        currentPage,
        siblingCount
    })
    const pageNumbers = []
    const loopLimit = Math.ceil(totalCount / pageSize)
    for (let i = 1; i <= loopLimit; i++) {
        pageNumbers.push(i)
    }
  return (
    <div className={styles.pageBtns_wrapper}>
        {
            paginationRange?.map((page, index) =>
                <div 
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    data-theme={theme}
                    data-active={page === currentPage}
                    className={styles.pageBtn} 
                >
                    <h3> {page} </h3>
                </div>
            )
        }
    </div>
  )
}

export default Pagination