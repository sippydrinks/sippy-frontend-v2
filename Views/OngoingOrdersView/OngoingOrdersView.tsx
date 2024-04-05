import React from 'react'
import { Account, OngoingOrders } from '@/components'
import { Carousel } from '@/shared'

const OngoingOrdersView = () => {
  const activeTab: number = 4
  return (
    <>
      <Carousel
        title="account"
        isBorder
        icon1="/svgs/profile-Icon1.svg"
        icon2="/svgs/profile-Icon2.svg"
      />
      <Account tabActive={activeTab}>
        <OngoingOrders />
      </Account>
    </>
  )
}

export default OngoingOrdersView