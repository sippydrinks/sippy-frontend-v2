import React from 'react'
import { Account, CompletedOrders } from '@/components'
import { Carousel } from '@/shared'

const CompletedOrdersView = () => {
  const activeTab: number = 5
  return (
    <>
      <Carousel
        title="account"
        isBorder
        icon1="/svgs/profile-Icon1.svg"
        icon2="/svgs/profile-Icon2.svg"
      />
      <Account tabActive={activeTab}>
        <CompletedOrders />
      </Account>
    </>
  )
}

export default CompletedOrdersView