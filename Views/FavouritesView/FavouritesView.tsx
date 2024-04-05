import React from 'react'
import { Account, Favourites } from '@/components'
import { Carousel } from '@/shared';

const FavouritesView = () => {
  const activeTab: number = 3

  return (
    <>
        <Carousel
            title="account"
            isBorder
            icon1="/svgs/profile-Icon1.svg"
            icon2="/svgs/profile-Icon2.svg"
        />
      <Account tabActive={activeTab}>
        <Favourites />
      </Account>
    </>
  )
}

export default FavouritesView