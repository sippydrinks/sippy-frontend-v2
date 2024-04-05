'use client';
import React from 'react'
import { Button } from '@/shared'
import { OrderDetailsCard } from '..'
import { ContextProps, useGlobalContext } from '@/contexts/AppContext'
import Link from 'next/link'
import Image from 'next/image'
import styles from './TrackOrder.module.scss'

const TrackOrder = () => {
    const { theme }: ContextProps = useGlobalContext()
  return (
    <div className={styles.trackOrder_container}>
        <div className={styles.trackOrder_body}>
            <div className={styles.breadcrumb}>
                <Link href='/account/ongoingOrders'>
                    <p>Ongoing orders</p>
                </Link>
                <div className={styles.arrow}>
                    <Image alt='' fill src={`/svgs/chevron-${theme}.svg`} />
                </div>
                <p>Track order</p>
            </div>
            <div className={styles.delivery_details}>
                <div className={styles.delivery_id}>
                    <h3>Order No : <span>#45454</span></h3>
                    <h3>Order Date : <span>23RD AUG,2023</span></h3>
                </div>
                <div className={styles.delivery_time}>
                    <h3>Estimated delivery time</h3>
                    <div className={styles.time}>
                        <div>
                            <h1>00</h1>
                            <p>Days</p>
                        </div>
                        <h3>:</h3>
                        <div>
                            <h1>00</h1>
                            <p>Hours</p>
                        </div>
                    </div>
                </div>
                <Button buttonType='transparent' className={styles.cancel_btn}>
                    <h3>Cancel Order</h3>
                </Button>
            </div>
            <div className={styles.progress_info}>
                <div className={styles.progress_bar}>
                    <div className={styles.checkmark}>
                        <Image alt='' fill src='/svgs/checkmark.svg' />
                    </div>
                    <div className={styles.line1}></div>
                    <div className={styles.checkmark}>
                        <Image alt='' fill src='/svgs/checkmark.svg' />
                    </div>
                    <div className={styles.line2}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.progress_texts}>
                    <div className={styles.progress_text}>
                        <h3>Order Processed</h3>
                        <div className={styles.text}>
                            <p>4:13 PM - 23 Aug 2023</p>
                        </div>
                    </div>
                    <div className={styles.progress_text}>
                        <h3>Order confirmed</h3>
                        <div className={styles.text}>
                            <p>5:00 PM - 23 Aug 2023</p>
                        </div>
                    </div>
                    {/* <div className={styles.progress_text}>
                        <h3></h3>
                        <div className={styles.text}>
                            <p></p>
                        </div>
                    </div>
                    <div className={styles.progress_text}>
                        <h3></h3>
                        <div className={styles.text}>
                            <p>
                                
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className={styles.order_details}>
                <h1>Order Details</h1>
                <div className={styles.details_cards}>
                    {[1, 2, 3].map((item, index) =>
                        <OrderDetailsCard
                            key={index}
                            productImg='/svgs/order-details.svg'
                            productName='Pack of Pulpy Fruit Juice'
                            productSize='75cl'
                            productPrice={50000}
                        />
                    )}
                </div>
            </div>
            <div className={styles.address_details}>
                <div className={styles.address}>
                    <p>Delivery Address</p>
                    <h3>
                        BAS Street, Iyana Iworo Lagos State, Nigeria and this is the address 
                        BAS Street, Iyana Iworo Lagos State, Nigeria and this is the address
                    </h3>
                </div>
                <div className={styles.details}>
                    <div className={styles.text}>
                        <p>Subtotal</p>
                        <p>Delivery</p>
                        <h3>Total</h3>
                    </div>
                    <div className={styles.text}>
                        <h3>₦ 210000</h3>                  
                        <h3>₦ 2100</h3>                        
                        <h3>₦ 220000</h3>
                    </div>
                </div>
            </div>
            <Button disabled buttonType='transparent' className={styles.cancel_btn_sm}>
                <h3>Cancel Order</h3>
            </Button>
        </div>
    </div>
  )
}

export default TrackOrder