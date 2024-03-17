import React, { useState } from 'react'
import { Button, InputField } from '@/shared'
import { useGlobalContext } from '@/contexts/AppContext'
import { ViewcartModal } from '@/shared/modals'
import { formatNum } from '@/utils'
import { couponCodes } from '@/mock'
import styles from './CheckoutSummary.module.scss'

const CheckoutSummary = () => {
    const { themeColor, cartDetails } = useGlobalContext()
    const [inputValue, setInputValue] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    const deliveryFee: number = 1200
    const VAT: number = 400
    const amountInCart: number = cartDetails.cartAmount
    const totalCost: number = deliveryFee + VAT + amountInCart
  return (
    <div data-theme={themeColor} className={styles.checkout_summary}>
        <h5 className={styles.summary_header}>Summary</h5>
        <div className={styles.summary_details}>
            <div className={styles.input_container}>
                <InputField value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    label='Discount code' 
                    placeholder='Enter discount code' 
                />
                {inputValue === '' ? 
                    <Button disabled buttonType='transparent' className={styles.applyDiscount_btn}>
                        <h4>Apply</h4>
                    </Button>
                : 
                    <Button buttonType='transparent' className={styles.applyDiscount_btnActive}>
                        <h4>Apply</h4>
                    </Button>
                }
            </div>
            <div className={styles.summary_body}>
                <p>Total Items ({cartDetails.cartQuantity})</p>
                <h3 onClick={openModal} className={styles.view_cart}>View cart</h3>
            </div>
            <div className={styles.summary_body}>
                <p>Delivery</p>
                <h3>₦{cartDetails.cartAmount === 0 ? 0.00 : deliveryFee}</h3>
            </div>
            <div className={styles.summary_body}>
                <p>VAT</p>
                <h3>₦{cartDetails.cartAmount === 0 ? 0.00 : VAT}</h3>
            </div>
            <div className={styles.summary_body}>
                <p>Subtotal</p>
                <h3>₦{cartDetails.cartAmount}</h3>
            </div>
            <div className={styles.line}></div>
            <div className={styles.summary_body}>
                <p>Total</p>
                <h5 className={styles.total}>
                    ₦{cartDetails.cartAmount === 0 ? 0.00 : formatNum(totalCost)}
                </h5>
            </div>
        </div>
        {cartDetails.cartAmount === 0 ?
            <Button disabled buttonType='primary' className={styles.summary_btn}>
                <h3>Proceed</h3>
            </Button>
        :
            <Button buttonType='primary' className={styles.summary_btn_active}>
                <h3>Proceed</h3>
            </Button>
        } 
        <ViewcartModal isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

export default CheckoutSummary