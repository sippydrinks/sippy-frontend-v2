import React from 'react'
import OrdersCard from '../OrdersCard/OrdersCard'
import { completedOrdersData } from '@/mock'
import styles from './CompletedOrders.module.scss'

const CompletedOrders = () => {
  return (
    <div className={styles.completed_orders}>
      {completedOrdersData.map((item, index) =>
        <OrdersCard
          key={index}
          orderStatus='Delivered to you'
          productImg1={item.productImg1}
          productImg2={item.productImg2}
          productImg3={item.productImg3}
          productImg4={item.productImg4}
          orderNum={item.orderNumber}
          totalPrice={item.totalPrice}
          date={item.date}
          isReview={item.isReview}
        />
      )}
    </div>
  )
}

export default CompletedOrders