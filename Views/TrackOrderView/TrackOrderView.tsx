import React from 'react'
import { TrackOrder } from '@/components'
import { Carousel } from '@/shared'

const TrackOrderView = () => {
  return (
    <>
        <Carousel
            title="account"
            isBorder
            icon1="/svgs/profile-Icon1.svg"
            icon2="/svgs/profile-Icon2.svg"
        />
        <TrackOrder />
    </>
  )
}

export default TrackOrderView