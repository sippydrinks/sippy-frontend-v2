import React, { useState } from 'react'
import { useGlobalContext } from '@/contexts/AppContext';
import styles from './SelectComponent.module.scss'

const SelectComponent = () => {
    const { themeColor } = useGlobalContext()
    const [selectedOption, setSelectedOption] = useState<string>("");
    const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
    };
  return (
    <div data-theme={themeColor} className={styles.select_container}>
      <select onChange={handleChange}>
        <option value="">Sort By</option>
        <option value="option1">Popularity</option>
        <option value="option2">Highest in Price</option>
        <option value="option3">Lowest in Price</option>
      </select>
    </div>
  )
}

export default SelectComponent