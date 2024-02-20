import React from 'react'
import { useGlobalContext } from '@/contexts/AppContext'
import { CounterProps } from '@/interface'
import styles from './Counter.module.scss'

const Counter = ({counterValue, onIncrement, onDecrement, classname}: CounterProps) => {
    const { themeColor } = useGlobalContext()
    
  return (
    <div data-type={themeColor} className={`${styles.incrementor} ${classname}`}>
        <div onClick={onDecrement} className={styles.plusBtn}>
            <h1 data-type={themeColor} className={styles.actionBtn}>
                -
            </h1>
        </div>
        <div>
            <h3 data-type={themeColor} className={styles.count}>
                {counterValue}
            </h3>
        </div>
        <div onClick={onIncrement} className={styles.minusBtn}>
            <h1 data-type={themeColor} className={styles.actionBtn}>
                +
            </h1>
        </div>
    </div>
  )
}

export default Counter