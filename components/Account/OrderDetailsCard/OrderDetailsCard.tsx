import React from 'react'
import { OrderDetailsCardProps } from '@/interface/account'
import Image from 'next/image'
import styles from './OrderDetailsCard.module.scss'

const OrderDetailsCard = (props: OrderDetailsCardProps) => {
  return (
    <div className={styles.card}>
        <div className={styles.card_image}>
          <Image alt='' fill src={props.productImg} />
        </div>
        <div>
            <h3>{props.productName}</h3>
            <h2>{props.productSize}</h2>
            <p>₦ {props.productPrice}</p>
        </div>
    </div>
  )
}

export default OrderDetailsCard