import React, { useState } from 'react'
import styles from './DoubleRangeSlider.module.scss'
import { useGlobalContext } from '@/contexts/AppContext';

const DoubleRangeSlider = ({ minValue, maxValue, onChange }: any) => {
    const [values, setValues] = useState([minValue, maxValue]);
    const { themeColor } = useGlobalContext()
  const handleMouseDown = (index: number) => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  const handleMouseMove = ({event, index}: any) => {
    // Calculate the new values based on the mouse position
    // Adjust this logic based on your specific requirements
    const newValue = Math.round((event.clientX / window.innerWidth) * (maxValue - minValue));

    // Update the state based on the index of the slider being moved
    setValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = newValue;
      return newValues;
    });

    // Call the onChange callback with the updated values
    onChange && onChange([...values]);
  };
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
  const handleRangeChange = (newValues: any) => {
    console.log('New Range Values:', newValues, 24);
  };
  return (
    <div className={styles.slider} onChange={handleRangeChange}>
      <input
        className={styles.sliderHandle}
        style={{ left: `${(values[0] / maxValue) * 100}%` }}
        onMouseDown={() => handleMouseDown(0)} />
      {/* </div> */}
      <input
        className={styles.sliderHandle}
        style={{ left: `${(values[1] / maxValue) * 100}%` }}
        onMouseDown={() => handleMouseDown(1)} />
      {/* </div> */}
        <div data-theme={themeColor} className={styles.filterName}>
            <div className={styles.sliderValue}>
                <h3>{minValue}</h3>
            </div> 
            <span> - </span> 
            <div className={styles.sliderValue}>
                <h3>{maxValue}</h3>
            </div>
        </div>
    </div>
  )
}

export default DoubleRangeSlider