'use client';
import React from 'react'
import { ModalElement, Button } from '@/shared'
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';
import { EditInfoModalProps } from '@/interface/shared';
import Image from 'next/image';
import styles from './EditInfoModal.module.scss'

const EditInfoModal = ({ isOpen, onClose, number, DOB}: EditInfoModalProps) => {
    const { theme }: ContextProps = useGlobalContext()
    
  return (
    <ModalElement className={styles.modal_container} isOpen={isOpen} onClose={onClose} modalImage=''>
        <div className={styles.modal_body_container}>
            <div className={styles.modal_header}>
                <h3 className={styles.header_text}>Edit Info</h3>
                <div onClick={onClose} className={styles.close_btn}>
                    <Image alt='close' fill src={`/svgs/plus-${theme}.svg`} />
                </div>
            </div>
            <div className={styles.modal_content}>
                <div className={styles.phone_number_field}>
                    <h3>Your Phone number</h3>
                    {number}
                </div>
                <div className={styles.date_field}>
                    <h3>Date of birth</h3>
                    {DOB}
                </div>
            </div>
            <Button buttonType='primary' className={styles.save_btn} onClick={onClose}>
                <h3 className={styles.save_btn_text}>Save</h3>
            </Button>
        </div>
    </ModalElement>
  )
}

export default EditInfoModal