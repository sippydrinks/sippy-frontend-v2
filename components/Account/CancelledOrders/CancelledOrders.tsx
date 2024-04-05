import React from 'react'
import cancelledOrdersData from '@/mock/cancelledOrdersData'
import OrdersCard from '../OrdersCard/OrdersCard'
import styles from './CancelledOrders.module.scss'

const CancelledOrders = () => {
  return (
    <div className={styles.cancelled_orders}>
      {cancelledOrdersData.map((item, index) =>
        <OrdersCard
          key={index}
          orderStatus='Cancelled'
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

export default CancelledOrders