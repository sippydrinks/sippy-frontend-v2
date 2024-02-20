'use client';
import React, { useState } from 'react'
import { AuthComponent }from '@/shared'
import { InputField } from '@/shared'
import styles from './RecoverPassword.module.scss'

const Recoverpassword = () => {
  const [activeTab, setActiveTab] = useState<number>(1)
  const ToggleTab = (tabIndex: number) => {
    setActiveTab(tabIndex);
  }
  return (
    <div className={styles.signIn_body}>
      <AuthComponent
        header='Recover password'
        btnText='Get reset link'
        bgColor='#FFECEB'
        bannerText='Oops! it happens'
        className={styles.auth_component}
      >
        <p>Enter your email or phone number and we&apos;ll send you a link to reset your password.</p>
        <div className={styles.tabHeader_container}>
          <div className={activeTab === 1 ? styles.tab_active : styles.tab} onClick={() => ToggleTab(1)}>
              <h3>Email</h3>
          </div>
          <div className={activeTab === 2 ? styles.tab_active : styles.tab} onClick={() => ToggleTab(2)}>
              <h3>Phone number</h3>
          </div>
        </div>
        <div className={styles.tabcontent}>
          {activeTab === 1 &&
            <div className={styles.tab_1}>
              <div className={styles.input_fields}>
                <InputField label='Email address' placeholder='Enter your email address' />
              </div>
            </div>
          }
          {activeTab === 2 &&
            <div className={styles.tab_1}>
              <div className={styles.input_fields}>
                <InputField label='Phone number' placeholder='Enter phone number' />
              </div>
            </div>
          }
        </div>
      </AuthComponent>
    </div>
  )
}

export default Recoverpassword