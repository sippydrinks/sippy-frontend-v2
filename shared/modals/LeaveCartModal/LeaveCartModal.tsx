import React from 'react'
import { ModalElement, Button, InputField } from '@/shared'
import { ModalProps } from '@/interface'
import styles from './LeaveCartModal.module.scss'

const LeaveCartModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <ModalElement isOpen={isOpen} onClose={onClose} modalImage='/svgs/modal-Image1.svg'>
        <div className={styles.modal_body}>
            <h3>Leave Cart</h3>
            <p>
                Hey! you are about to exit Prince’s cart. 
                You will have to be invited again to be able to shop with Prince. 
                Your items will be added to your cart
            </p>
            <InputField className={styles.input_field} 
                label='Tell us why' 
                placeholder='Type here' 
                type='textarea' 
            />
            <div className={styles.btns}>
                <Button buttonType='primary' className={styles.cancel_btn}>
                    <h3>Cancel</h3>
                </Button>
                <Button buttonType='primary' className={styles.leavecart_btn}>
                    <h3>Leave Cart</h3>
                </Button>
            </div>
        </div>
    </ModalElement>
  )
}

export default LeaveCartModal