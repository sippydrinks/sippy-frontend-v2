'use client';
import React from 'react'
import { Account, Address } from '@/components'
import { Carousel } from '@/shared';

const AddressView = () => {
    const activeTab = 2
  return (
    <>
      <Carousel
        title="account"
        isBorder
        icon1="/svgs/profile-Icon1.svg"
        icon2="/svgs/profile-Icon2.svg"
      />
      <Account tabActive={activeTab}>
        <Address />
      </Account>
    </>
  )
}

export default AddressView