'use client';
import React from 'react'
import OrdersCard from '../OrdersCard/OrdersCard'
import { ongoingOrdersData } from '@/mock'
import { OngoingOrdersProps } from '@/interface/account';
import styles from './OngoingOrders.module.scss'

const OngoingOrders = () => {
  return (
    <div className={styles.ongoing_orders}>
      {ongoingOrdersData.map((item: OngoingOrdersProps, index: number) =>
        <OrdersCard
          key={index}
          {...item}
        />
      )}
    </div>
  )
}

export default OngoingOrders