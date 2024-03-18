import React from 'react'
import { AuthBanner } from '@/shared'
import styles from './AuthNotification.module.scss'

const AuthNotification = () => {
  return (
    <div className={styles.notification}>
        <AuthBanner className={styles.banner} bannerText='Hurray' bgColor='#EDFADE' />
        <h1>Check your email / phone number</h1>
        <p>
            We have sent you a reset link, click on it to take you to the page to input your 
            new password. 
            If you didnt receive the link, <span>Click here</span> to resend
        </p>
    </div>
  )
}

export default AuthNotification