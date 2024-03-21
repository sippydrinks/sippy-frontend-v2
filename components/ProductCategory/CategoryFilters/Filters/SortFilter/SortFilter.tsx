'use client';
import React, { useState } from 'react'
import { useGlobalContext } from '@/contexts/AppContext'
import { sortFilterData } from '@/mock';
import { CheckBox } from '@/shared';
import styles from './SortFilter.module.scss'

const SortFilter = () => {
    const { theme } = useGlobalContext()
    const [checkedboxes, setCheckedBoxes] = useState<any[]>([sortFilterData])
    const handleChange = (event: any) => {
      setCheckedBoxes({...checkedboxes, [event?.target.name]: event?.target.checked})
      console.log(event?.target.value, event?.target.checked);
    }
  return (
    <div className={styles.sort_filter_container}>
        {sortFilterData.map((el, index) => 
            <div key={index} className={styles.filterName} data-theme={theme}>
              {/* <input
                onChange={handleChange}
                type="radio"
                name="category"
                id=""
                value={el.sort}
                checked={checkedboxes[index]}
              /> */}
              <CheckBox value={el.sort} onChange={handleChange} checked={checkedboxes[index]} />
              <div><h3>{el.sort}</h3></div>
            </div>
          )}
    </div>
  )
}

export default SortFilter