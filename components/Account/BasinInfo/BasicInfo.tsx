'use client';
import React from 'react'
import { useGlobalContext, ContextProps } from '@/contexts/AppContext'
import { Button, InputField } from '@/shared'
import Image from 'next/image'
import styles from './BasicInfo.module.scss'

const BasicInfo = () => {
  const { theme }: ContextProps = useGlobalContext()
  return (
    <div data-theme={theme} className={styles.basicInfo_container}>
      <h1>Basic Information</h1>
      <div>
        <div className={styles.basic_info}>
          <div className={styles.image_container}>
            <div className={styles.profile_image}>
              <Image alt='' fill src='/svgs/profileIcon.svg' />
            </div>
            <div className={styles.camera_container}>
              <div className={styles.camera_icon}>
                <Image alt='' fill src='/svgs/camera.svg' />
              </div>
            </div>
          </div>
          <div className={styles.nameAndEmail}>
            <h3>Prince Ojakorotu</h3>
            <div className={styles.border}></div>
            <p>Princeojakorotu@gmail.com</p>
          </div>
        </div>
        <div className={styles.address_input}>
          <div className={styles.address_body}>
            <h3>Phone number</h3>
            <div className={styles.edit_option}>
              <h4>+234 345 345 345</h4>
              <div className={styles.edit_icon}>
                <Image alt='' fill src={`/svgs/edit-${theme}.svg`} />
              </div>
            </div>
          </div>
          <div className={styles.address_bodyB}>
            <h3>Birthday</h3>
            <div className={styles.edit_option}>
              <h4>MM/DD/YYYY</h4>
              <div className={styles.edit_icon}>
                <Image alt='' fill src={`/svgs/edit-${theme}.svg`} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Button buttonType='primary' className={styles.save_btn}>
        <h4>Save changes</h4>
      </Button> */}

      <h1>Change Password</h1>
      <div className={styles.password_inputFields}>
        <InputField className={styles.password_inputField} placeholder='Type current password' />
        <InputField className={styles.password_inputField} placeholder='Type new password' />
        <InputField placeholder='Retype new password' />
      </div>
      <Button buttonType='primary' className={styles.change_btn}>
        <h4>Change password</h4>
      </Button>
    </div>
  )
}

export default BasicInfo