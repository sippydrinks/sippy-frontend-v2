'use client';
import React from 'react'
import { ModalElement, Button} from '@/shared'
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';
import { EditAddressModalProps } from '@/interface/shared';
import Image from 'next/image';
import styles from './EditAddressModal.module.scss'

const EditAddressModal = ({ isOpen, onClose, name, number, email, state, street, city}: EditAddressModalProps) => {
    const { theme }: ContextProps = useGlobalContext()
  return (
    <ModalElement bodyClass={styles.modal_wrapper} isOpen={isOpen} onClose={onClose} modalImage=''>
        <div className={styles.modal_body_container}>
            <div className={styles.modal_header}>
                <h2 className={styles.edit_modal_header}>Edit Address</h2>
                <div onClick={onClose} className={styles.close_btn}>
                    <Image alt='close' fill src={`/svgs/plus-${theme}.svg`} />
                </div>
            </div>

            <div className={styles.modal_content}>
                <div className={styles.phone_number_field}>
                    <h3>Your Email Address</h3>
                    {email}
                </div>
                <div className={styles.date_field}>
                    <h3>Your Phone number</h3>
                    {number}
                </div>
                <div className={styles.date_field}>
                    <h3>Your Name</h3>
                    {name}
                </div>
                <div className={styles.date_field}>
                    <h3>Street</h3>
                    {street}
                </div>
                <div className={styles.date_field}>
                    <h3>State</h3>
                    {state}
                </div>
                <div className={styles.date_field}>
                    <h3>City</h3>
                    {city}
                </div>
            </div>
            <Button onClick={onClose} buttonType='primary' className={styles.save_btn}>
                <h5 className={styles.action_btn_text}>Save</h5>
            </Button>
        </div>
    </ModalElement>
  )
}

export default EditAddressModal