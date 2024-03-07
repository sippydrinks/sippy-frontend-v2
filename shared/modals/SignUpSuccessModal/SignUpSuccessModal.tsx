import React from 'react'
import { Button, AuthBanner } from '@/shared'
import { ModalProps } from '@/interface'
import styles from './SignUpSuccessModal.module.scss'
import Image from 'next/image'

const SignUpSuccessModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <div className={styles.signUp_container}>
        <div className={styles.signUp_image}>
            <Image alt='' fill src='/svgs/signUpSuccess.svg' />
        </div>
        <AuthBanner bannerText='Welcome to sippy!' bgColor='#EBF8FF' />
        <div className={styles.text}>
            <h3>Account successfully created</h3>
            <p>
                Enjoy an amazing experience. 
                Welcome to sippy where you don’t have to choose between ease and comfort
            </p>
        </div>
        <Button buttonType='primary' className={styles.signUp_btn}>
            <h3>Continue shopping</h3>
        </Button>
    </div>
  )
}

export default SignUpSuccessModal