import React from 'react'
import { Account, CancelledOrders } from '@/components'
import { Carousel } from '@/shared'

const CancelledOrdersView = () => {
  const activeTab: number = 6
  return (
    <>
      <Carousel
        title="account"
        isBorder
        icon1="/svgs/profile-Icon1.svg"
        icon2="/svgs/profile-Icon2.svg"
      />
      <Account tabActive={activeTab}>
        <CancelledOrders />
      </Account>
    </>
  )
}

export default CancelledOrdersView