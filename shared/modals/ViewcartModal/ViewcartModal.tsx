'use client';
import React from 'react'
import { ModalElement, ItemDetailsCard } from '@/shared'
import { useGlobalContext } from '@/contexts/AppContext'
import { CartDetailsCardProps, ModalProps } from '@/interface'
import { cartData } from '@/mock'
import Image from 'next/image'
import styles from './ViewcartModal.module.scss'

const ViewcartModal = ({isOpen, onClose}: ModalProps) => {
    const { theme, cart } = useGlobalContext()
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
                    <Image alt='close' fill src={`/svgs/plus-${theme}.svg`} />
                </div>
            </div>
            <div className={styles.cards}>
                {cartData.length > 0 ? 
                    cartData.map((item: CartDetailsCardProps, index: number) =>
                        <ItemDetailsCard
                            key={index}
                            {...item}
                            cardType="cart"
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