'use client';
import React from 'react'
import Image from 'next/image'
import styles from './Address.module.scss'
import { useGlobalContext, ContextProps } from '@/contexts/AppContext'
import { Button } from '@/shared';

const Address = () => {
  const { theme }: ContextProps = useGlobalContext()
  return (
    <div data-theme={theme} className={styles.address_container}>
      <div className={styles.address_header}>
        <h1>Shipping Address <span>(Default)</span></h1>
        <div className={styles.editBtn}>
          <h3>Edit</h3>
          <div className={styles.edit_icon}>
            <Image alt='' fill src={`/svgs/edit-${theme}.svg`} />
          </div>
        </div>
      </div>
      <div className={styles.address_input}>
        <div className={styles.address_body}>
          <h3>Street</h3>
          <h4>2 otutuke st, Ikeja. Lagos state, Nigeria plus many other text can enter here</h4>
        </div>
        <div className={styles.address_body}>
          <h3>State</h3>
          <h4>Lagos</h4>
        </div>
        <div className={styles.address_bodyB}>
          <h3>City</h3>
          <h4>Ikeja</h4>
        </div>
      </div>

      <div className={styles.address_header}>
        <h1>Shipping Address <span>2</span></h1>
        <div className={styles.editBtn}>
          <h3>Edit</h3>
          <div className={styles.edit_icon}>
            <Image alt='' fill src={`/svgs/edit-${theme}.svg`} />
          </div>
        </div>
      </div>
      <div className={styles.address_input}>
        <div className={styles.address_body}>
          <h3>Street</h3>
          <h4>2 otutuke st, Ikeja. Lagos state, Nigeria plus many other text can enter here</h4>
        </div>
        <div className={styles.address_body}>
          <h3>State</h3>
          <h4>Lagos</h4>
        </div>
        <div className={styles.address_bodyB}>
          <h3>City</h3>
          <h4>Ikeja</h4>
        </div>
      </div>

      <Button buttonType='primary' className={styles.change_btn}>
        <h4>Add new address</h4>
      </Button>
    </div>
  )
}

export default Address