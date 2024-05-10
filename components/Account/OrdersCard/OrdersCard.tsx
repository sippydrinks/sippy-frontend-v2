'use client';
import React from 'react'
import { useRouter } from 'next/navigation'
import OrderStatusIndicator from '../OrderStatusIndicator/OrderStatusIndicator'
import { OrdersCardProps } from '@/interface/account'
import { ContextProps, useGlobalContext } from '@/contexts/AppContext'
import ProductSvg from '@/shared/ItemDetailsCard/ProductSvg/ProductSvg'
import { Button } from '@/shared'
import Image from 'next/image'
import styles from './OrdersCard.module.scss'

const OrdersCard = ({
    date,
    orderNum,
    orderStatus,
    totalPrice,
    productImg1,
    productImg2,
    productImg3,
    isReview = false,
    productImg4
}: OrdersCardProps) => {
    const { theme } = useGlobalContext()
    const router = useRouter()
  return (
    <div className={styles.orderCard_container}>
        <div className={styles.order_details}>
            <div className={styles.image_container}>
                {[productImg1, productImg2, productImg3, productImg4].map((imageSrc, index) =>
                    <div key={index} className={styles.image_wrapper}>
                        <ProductSvg />
                        <div className={styles.image}>
                            <Image alt='' fill src={imageSrc} />
                        </div>
                    </div>
                )}
                <div className={styles.image_wrapper}>
                    <Image alt='' fill src='/svgs/whiteBg-svg.svg' />
                    <div className={styles.image}>
                        <h3>+4</h3>
                    </div>
                </div>
            </div>
            <div data-theme={theme} className={styles.dateAndId}>
                <h3 >
                    #order {orderNum} . {date}
                </h3>
                <div className={styles.product_review}>
                    {isReview === true && 
                        [1, 2, 3, 4, 5].map(item => 
                            <div className={styles.reviewIcon} key={item}>
                                <Image alt='' src='/svgs/ratingsIcon.svg' fill />
                            </div>
                        )}
                </div>
            </div>
            <OrderStatusIndicator orderStatus={orderStatus} />
            <div className={styles.orderStatus_text}>
                <h3 data-status={orderStatus}>{orderStatus}</h3>
                <p>₦ {totalPrice}</p>
            </div>
        </div>

        <div className={styles.status}>
            {orderStatus === 'Delivered to you' &&
                <div data-theme={theme} data-active={isReview} className={styles.order_btns}>
                    {/* <Button buttonType='primary' className={styles.orderCard_btn}>
                        <h3>Add review</h3>
                    </Button> */}
                    <Button buttonType='primary' className={styles.view_btn}>
                        <h3>Buy Again</h3>
                    </Button>
                </div>
            }
            {orderStatus === 'Cancelled' &&
                <div data-theme={theme} className={styles.order_btns}>
                    <Button buttonType='primary' className={styles.orderCard_btn}>
                        <h3>Buy Again</h3>
                    </Button>
                    <Button buttonType='primary' className={styles.view_btn}>
                        <h3>View Drinks</h3>
                    </Button>
                </div>
            }
            {orderStatus === 'Order confirmed' &&
                <div data-theme={theme} className={styles.order_btns}>
                    {/* <Button onClick={() => router.push('/account/trackOrder')} data-status={orderStatus} buttonType='primary' className={styles.orderCard_btn}>
                        <h3>Track order</h3>
                    </Button> */}
                    <Button buttonType='primary' className={styles.view_btn}>
                        <h3>Track order</h3>
                    </Button>
                </div> 
            }
            {orderStatus === 'Out for delivery' &&
                <div data-theme={theme} className={styles.order_btns}>
                    {/* <Button onClick={() => router.push('/account/trackOrder')} data-status={orderStatus} buttonType='primary' className={styles.orderCard_btn}>
                        <h3>Track order</h3>
                    </Button> */}
                    <Button buttonType='primary' className={styles.view_btn}>
                        <h3>Track order</h3>
                    </Button>
                </div> 
            }
            {orderStatus === 'Processing Order' &&
                <div data-theme={theme} className={styles.order_btns}>
                    <Button buttonType='primary' className={`${styles.view_btn} ${styles.views_btn}`}>
                        <h3>Track order</h3>
                    </Button>
                </div> 
            }
        </div>
    </div>
  )
}

export default OrdersCard