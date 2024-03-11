'use client';
import React from 'react'
import { Carousel, RelatedProducts } from '@/shared'
import { CartDetails } from '@/components'

const CartView = () => {
  return (
    <>
      <Carousel 
        title='cart'
        isBorder
        icon1='/svgs/cart-orange.svg'
        icon2='/svgs/shopping-bag.svg'
      />
      <CartDetails />
      <Carousel 
        title='reconmended products'
        isBorder
        icon1='/svgs/StarOrange.svg'
        icon2='/svgs/StarOrange.svg'
      />
      <RelatedProducts />
    </>
  )
}

export default CartView