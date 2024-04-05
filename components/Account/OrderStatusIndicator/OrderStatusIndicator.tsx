import React from 'react'
import { OrderStateProps } from '@/interface/account'
import styles from './OrderStatusIndicator.module.scss'

const OrderStatusIndicator = ({orderStatus}: OrderStateProps) => {
  return (
    <div data-status={orderStatus} className={styles.container}>
        <div className={styles.block_1}></div>
        <div className={styles.block_2}></div>
        <div className={styles.block_3}></div>
        <div className={styles.block_4}></div>
    </div>
  )
}

export default OrderStatusIndicator