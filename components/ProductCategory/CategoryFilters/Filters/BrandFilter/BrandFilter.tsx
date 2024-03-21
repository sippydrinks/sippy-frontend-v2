'use client';
import React, { useState } from 'react'
import { useGlobalContext } from '@/contexts/AppContext'
import { CheckBox } from '@/shared'
import { brandFilterComponentProps, brandFilterDataProps } from '@/interface/components';
import Image from 'next/image'
import styles from './BrandFilter.module.scss'

const BrandFilter = ({handleCheckbox, checkedboxes, brandFilterData}: brandFilterComponentProps) => {
  const { theme } = useGlobalContext()
    const [search, setSearch] = useState<string>('')
  return (
    <div className={styles.brand_filter_container}>
      <div className={styles.search_container}>
        <form action="" name='form'>
          <input 
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            name="search"
            id=""
            placeholder='Search brand'
            value={search}
            data-theme={theme}
          />
          <div className={styles.search_icon}>
            <Image alt='search' fill src={`/svgs/searchIcon-${theme}.svg`} />
          </div>
        </form>
      </div>

      {brandFilterData.map((el: brandFilterDataProps, index: number) => 
        <div key={index} data-theme={theme} className={styles.filterName}>
          <CheckBox value={el.brand} onChange={handleCheckbox} checked={checkedboxes[index]} />
          <div><h3>{el.brand}</h3></div>
        </div>
      )}
    </div>
  )
}

export default BrandFilter