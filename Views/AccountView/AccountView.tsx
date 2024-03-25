'use client';
import React from 'react'
import { Account, BasicInfo } from '@/components'
import { Carousel } from '@/shared';

const AccountView = () => {
  const activeTab: number = 1
  return (
    <>
        <Carousel
            title="account"
            isBorder
            icon1="/svgs/profile-Icon1.svg"
            icon2="/svgs/profile-Icon2.svg"
        />
        <Account tabActive={activeTab}>
          <BasicInfo />
        </Account>
    </>
  )
}

export default AccountView