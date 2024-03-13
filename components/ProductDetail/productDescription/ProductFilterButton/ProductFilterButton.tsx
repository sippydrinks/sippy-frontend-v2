import React, { useState } from 'react'
import { ProductFilterProps } from '@/interface/productDetails'
import styles from './ProductFilterButton.module.scss'

const ProductFilterButton = ({children}: ProductFilterProps) => {
    const [selected, setSelected] = useState<boolean>(false)
    const selectFilter = () => {
      setSelected(selected => !selected)
    }
  return (
    <div data-active={selected} onClick={selectFilter} className={styles.productQtyBtn}>
      {children}
    </div>
  )
}

export default ProductFilterButton