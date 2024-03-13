import React, { useState } from 'react'
import { Counter, Button } from '@/shared'
import { useGlobalContext } from '@/contexts/AppContext'
import styles from './ActionButtons.module.scss'

const ActionButtons = () => {
    const [counter, setCounter] = useState<number>(0)
    const { cartDetails } = useGlobalContext()
    const handleCountIncrease = () => {
        setCounter(counter + 1)
    }
    const handleCountDecrease = () => {
        setCounter(counter - 1)
    }
  return (
    <div className={styles.counterAndBtns_mob}>
        <div className={styles.counter_mob}>
            <h3>₦10,000</h3>
            <Counter 
                counterValue={counter}
                onDecrement={handleCountDecrease}
                onIncrement={handleCountIncrease}
            />
        </div>
        <div className={styles.btns_container_mob}>
            <Button 
                buttonType='primary' 
                className={styles.addToCartBtn}
            >
                <h3 className={styles.addToCartText}>
                    Add to cart
                </h3>
            </Button>

            <Button buttonType='primary' className={styles.buyNowBtn}>
                <h4>Buy now</h4>
            </Button>
        </div>
    </div>
  )
}

export default ActionButtons