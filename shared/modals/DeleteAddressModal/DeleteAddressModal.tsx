'use client';
import React, { useState } from 'react'
import { ModalElement, Button } from '@/shared'
import { ModalProps } from '@/interface'
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';
import Image from 'next/image';
import styles from './DeleteAddressModal.module.scss'

const DeleteAddressModal = ({ isOpen, onClose}: ModalProps) => {
    const { theme }: ContextProps = useGlobalContext()
  return (
    <ModalElement bodyClass={styles.modal_body_class} isOpen={isOpen} onClose={onClose} modalImage='/svgs/modal-Image1.svg'>
        <div className={styles.modal_body}>
            <div className={styles.close_btn}>
                <Image alt='close' src={`/svgs/plus-${theme}.svg`} />
            </div>
            <h3>Delete address</h3>
            <p>
                Are you sure you want to delete this address. 
                This address will be permanently deleted. This action cannot be reversed.
            </p>
            <div className={styles.btns}>
                <Button buttonType='primary' className={styles.delete_btn}>
                    <h3>Yes, Delete</h3>
                </Button>
                <Button buttonType='primary' className={styles.back_btn}>
                    <h3>No, Go back</h3>
                </Button>
            </div>
        </div>
    </ModalElement>
  )
}

export default DeleteAddressModal