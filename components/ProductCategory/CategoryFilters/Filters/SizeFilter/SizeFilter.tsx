'use client';
import React, { useState } from 'react'
import { useGlobalContext } from '@/contexts/AppContext'
import { CheckBox } from '@/shared'
import { sizeFilterProps } from '@/interface/components';
// import { sizeFilterData } from '@/mock'
import styles from './SizeFilter.module.scss'

const SizeFilter = ({handleCheckbox, checkedboxes, sizeFilterData}: any) => {
  const { theme } = useGlobalContext()
  // const [checkedboxes, setCheckedBoxes] = useState<any[]>([sizeFilterData])
  // const handleChange = (event: any) => {
  //   setCheckedBoxes({...checkedboxes, [event?.target.name]: event?.target.checked})
  //   console.log(event?.target.value, event?.target.checked);
  // }
  return (
    <div className={styles.sizeFilter_container}>
      {sizeFilterData.map((filterItem: sizeFilterProps, index: number) => 
        <div key={index} data-theme={theme} className={styles.filterName}>
          <form action="" name='form'>
            <CheckBox value={filterItem.size} onChange={handleCheckbox} checked={checkedboxes[index]} />
            <div><h3>{`${filterItem.size}cl`} x 6</h3></div>
          </form>
        </div>
      )}
    </div>
  )
}

export default SizeFilter