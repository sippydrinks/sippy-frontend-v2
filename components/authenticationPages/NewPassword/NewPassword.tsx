import React from 'react'
import { AuthComponent }from '@/shared'
import { InputField } from '@/shared'
import styles from './NewPassword.module.scss'

const NewPassword = () => {
  return (
    <div>
        <AuthComponent 
            btnText='Create password' 
            bannerText='Oops! it happens' 
            bgColor='#FFECEB' 
            header='Create new password'
            className={styles.auth_component}
        >
            <p>Set a password thats safe and also easy for you to remember this time around, ok</p>
            <div className={styles.fields}>
                <InputField label='Enter new password' placeholder='Enter password' type='password' />
                <InputField label='Confirm password' placeholder='Confirm password' type='password' />
            </div>
        </AuthComponent>
    </div>
  )
}

export default NewPassword