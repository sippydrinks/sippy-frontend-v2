import React from 'react'
import { ModalElement, ItemDetailsCard } from '@/shared'
import { useGlobalContext } from '@/contexts/AppContext'
import { ModalProps } from '@/interface'
import Image from 'next/image'
import cartData from '@/mock/cartData'
import styles from './ViewcartModal.module.scss'

const ViewcartModal = ({isOpen, onClose}: ModalProps) => {
    const { themeColor, cart } = useGlobalContext()
  return (
    <ModalElement 
        isOpen={isOpen} 
        onClose={onClose} 
        modalImage='/svgs/modal-Image2.svg' 
        className={styles.modal_image}
        bodyClass={styles.body_class}
    >
        <div className={styles.modal_children}>
            <div className={styles.modal_header}>
                <h3>My Cart</h3>
                <div onClick={onClose} className={styles.close_icon}>
                    <Image alt='close' fill src={`/svgs/plus-${themeColor}.svg`} />
                </div>
            </div>
            <div className={styles.cards}>
                {cart.length > 0 ? 
                    cart.map((item: any, index: number) =>
                        <ItemDetailsCard
                            key={index}
                            data={item}
                            cardType="cart"
                            // productImage='/svgs/cart-product-image.svg'
                            // cardType='cart'
                            // productName={item.productName}
                            // productPrice={item.productPrice}
                            // productSize={item.productSize}
                            // productQuantity={item.productQuantity}
                        />
                    ) 
                : 
                    <div className={styles.emptyCart}>
                        <h1>There are currently no items in cart</h1>
                    </div>
                }
            </div>
        </div>
    </ModalElement>
  )
}

export default ViewcartModal