import React from 'react'
import OrdersCard from '../OrdersCard/OrdersCard'
import { ongoingOrdersData } from '@/mock'
import styles from './OngoingOrders.module.scss'

const OngoingOrders = () => {
  return (
    <div className={styles.ongoing_orders}>
      {ongoingOrdersData.map((item, index) =>
        <OrdersCard
          key={index}
          orderStatus={item.orderStatus}
          productImg1={item.productImg1}
          productImg2={item.productImg2}
          productImg3={item.productImg3}
          productImg4={item.productImg4}
          orderNum={item.orderNumber}
          totalPrice={item.totalPrice}
          date={item.date}
        />
      )}
    </div>
  )
}

export default OngoingOrders