'use client';
import React, { useState } from 'react'
import { ModalElement, InputField, Button } from '@/shared'
import { ModalProps } from '@/interface'
import styles from './DeleteDrinkModal.module.scss'

const DeleteDrinkModal = ({ isOpen, onClose}: ModalProps) => {
    const [inputValue, setInputValue] = useState<string>('')
    
  return (
    <ModalElement bodyClass={styles.modal_Body_Class} isOpen={isOpen} onClose={onClose} modalImage='/svgs/modal-Image1.svg'>
        <div className={styles.modal_body}>
            <h3>Delete Drink</h3>
            <p>
                Oops!! seems your friend added a drink you don’t like. 
                You can remove this drink. 
                Add a note to tell your friend why you removed their drink
            </p>
            <InputField value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                className={styles.input_field} 
                label='Tell us why' 
                placeholder='Type here' 
                type='textarea' 
            />
            <div className={styles.btns}>
                <Button buttonType='primary' className={styles.save_btn}>
                    <h3>Added to saved drinks</h3>
                </Button>
                {inputValue === '' ?
                    <Button disabled buttonType='primary' className={styles.delete_btn}>
                        <h3>Delete drink</h3>
                    </Button> 
                : 
                    <Button buttonType='primary' className={styles.delete_btnActive}>
                        <h3>Delete drink</h3>
                    </Button>
                }
            </div>
        </div>
    </ModalElement>
  )
}

export default DeleteDrinkModal