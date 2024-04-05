'use client';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useGlobalContext, ContextProps } from '@/contexts/AppContext'
import { Button, InputField } from '@/shared'
import toast from 'react-hot-toast';
import Image from 'next/image'
import styles from './BasicInfo.module.scss'

const BasicInfo = () => {
  const currentPassword = 'DominicSavio'
  const { theme }: ContextProps = useGlobalContext()
  const { register, watch } = useForm()
  const [isEditing, setIsEditing] = useState<any>({isNumber: false, isDate: false});
  const [message, setMessage] = useState<any>({errorMessage: '', successMessage: '', currentPasswordMessage: '', currentPasswordErrorMessage: ''})
  const [inputValues, setInputValues] = useState<any>({getDate: '', currentPassword: '',
    newPassword: '',
    reEnterNewPassword: '',
  })
  const phoneNumber = watch('phone_number')
  const date = watch('date')
  const currentpassword = watch('currentpassword')
  const newPassword = watch('newpassword')
  const enterNewPassword = watch('reEnternewpassword')

  const formatphoneNumber = phoneNumber?.startsWith(0) ? phoneNumber?.replace(0, '') : phoneNumber
  const passwordCheck = inputValues.newpassword?.toLowerCase() === inputValues.reEnternewpassword?.toLowerCase()
  
  const handleSaveChanges = () => {
    setIsEditing({...isEditing, isNumber: false, isDate: false})
  }
  const confirmPassword = () => {
    if (currentPassword?.toLowerCase() === inputValues.currentpassword?.toLowerCase()) {
      setMessage({...message, currentPasswordMessage: 'Password is correct'})
    } else {
      setMessage({...message, currentPasswordErrorMessage: '', currentPasswordMessage: ''})
    }
  }
  const handleChangePassword = (e: any) => {
    (passwordCheck && (currentPassword?.toLowerCase() === inputValues.currentpassword?.toLowerCase())) ?
      toast.success('Password has successfully been changed')
    :
    <>
      {
        (currentPassword?.toLowerCase() !== inputValues.currentpassword?.toLowerCase()) ? 
          toast.error('Incorrect Old password')
        :
          toast.error('New Passwords do not match')
      }
    </>
  }
  const handleChange = (e: any) => {
		setInputValues((prevState: any) => ({
			...prevState,
			[e.target.name]: e.target.value
		}));
    if ((e.target.name === 'reEnternewpassword') && (!!passwordCheck)) {
      setMessage({...message, errorMessage: 'Passwords do not match'})
    } else if ((e.target.name === 'reEnternewpassword') && (passwordCheck)) {
      setMessage({...message, successMessage: '',  errorMessage: ''})
    } else {
      setMessage({...message, errorMessage: '', successMessage: ''})
    }
	};
  
  return (
    <div data-theme={theme} className={styles.basic_info_container}>
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
          <div className={styles.name_and_email}>
            <h3>Prince Ojakorotu</h3>
            <div className={styles.border}></div>
            <p>Princeojakorotu@gmail.com</p>
          </div>
        </div>

        <div className={styles.address_input}>
          <div className={styles.address_body}>
            <h3>Phone number</h3>
            <div className={styles.edit_option}>
              {isEditing.isNumber ?
                <>
                  <InputField register={register('phone_number')}
                    className={styles.edit_number}
                    inputClass={styles.edit_number_input}
                  />
                </> 
              : 
                <>
                  <InputField disabled inputClass={styles.disabled_input_text}
                    className={styles.disabled_input}
                    value={phoneNumber ? `+234 ${formatphoneNumber}` : `+234 345 345 345`} />
                  <div onClick={() => setIsEditing({...isEditing, isNumber: true})} className={styles.edit_icon}>
                    <Image alt='' fill src={`/svgs/edit-${theme}.svg`} />
                  </div>
                </>
              }
            </div>
          </div>
          <div className={styles.address_body_secondary}>
            <h3>Birthday</h3>
            <div className={styles.edit_option}>
              {isEditing.isDate ?
                <input {...register('date')} type="date" name="date" id="" 
                  onChange={handleChange}
                />
              : 
                <>
                  <h4>{inputValues.date ? inputValues.date : 'MM/DD/YYYY'}</h4>
                  <div onClick={() => setIsEditing({...isEditing, isDate: true})} 
                    className={styles.edit_icon}
                  >
                    <Image alt='' fill src={`/svgs/edit-${theme}.svg`} />
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </div>
      {(isEditing.isNumber || isEditing.isDate) &&
        <Button onClick={handleSaveChanges} buttonType='primary' className={styles.save_btn}>
          <h4>Save changes</h4>
        </Button>
      }

      <h1>Change Password</h1>
      <div className={styles.password_input_fields}>
        <InputField name='currentpassword' placeholder='Type current password'
          onChange={handleChange}
          className={styles.password_input_field}
          register={register('currentpassword')}
        />
        {(message.currentPasswordMessage && !message.currentPasswordErrorMessage) && 
          <h3 className={styles.correct_password}>
            {message.currentPasswordMessage}
          </h3>
        }
        <InputField name='newpassword' placeholder='Type new password' onChange={handleChange}
          className={styles.password_input_field}
          register={register('newpassword')}
          
        />
        <InputField name='reEnternewpassword' onChange={handleChange} 
          placeholder='Retype new password'
          register={register('reEnternewpassword')}
        />
        {message.errorMessage &&
          <h3 className={styles.incorrect_password}>{message.errorMessage}</h3>
        }
        {passwordCheck && 
          <h3 className={styles.correct_password}>{message.successMessage}</h3>
        }
      </div>
      <Button onClick={handleChangePassword} buttonType='primary' className={styles.change_btn}>
        <h4>Change password</h4>
      </Button>
    </div>
  )
}

export default BasicInfo