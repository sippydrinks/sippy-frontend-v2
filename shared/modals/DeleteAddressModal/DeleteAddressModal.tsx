'use client';
import React from 'react'
import { ModalElement, Button } from '@/shared'
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';
import { DeleteAddressModalProps } from '@/interface/shared';
import Image from 'next/image';
import styles from './DeleteAddressModal.module.scss'

const DeleteAddressModal = ({ isOpen, onClose, handleDelete}: DeleteAddressModalProps) => {
    const { theme }: ContextProps = useGlobalContext()
  return (
    <ModalElement bodyClass={styles.modal_body_class} isOpen={isOpen} onClose={onClose} modalImage='/svgs/modal-Image1.svg'>
        <div className={styles.modal_body}>
            <div onClick={onClose} className={styles.close_btn}>
                <Image alt='close' fill src={`/svgs/plus-${theme}.svg`} />
            </div>
            <h3 className={styles.header}>Delete address</h3>
            <p>
                Are you sure you want to delete this address. 
                This address will be permanently deleted. This action cannot be reversed.
            </p>
            <div className={styles.btns}>
                <Button onClick={handleDelete} buttonType='primary' className={styles.delete_btn}>
                    <h3>Yes, Delete</h3>
                </Button>
                <Button onClick={onClose} buttonType='primary' className={styles.back_btn}>
                    <h3>No, Go back</h3>
                </Button>
            </div>
        </div>
    </ModalElement>
  )
}

export default DeleteAddressModal