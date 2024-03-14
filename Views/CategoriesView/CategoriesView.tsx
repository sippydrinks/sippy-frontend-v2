'use client';
import { Categories } from '@/components';
import { DrinkTypeProps } from '@/interface'
import { MobileAppWidget, Carousel } from '@/shared';
import React from 'react'

const CategoriesView = ({type}: DrinkTypeProps) => {
  return (
    <>
      <Carousel 
        title='categories'
        icon1='/svgs/starGreen.svg'
        icon2='/svgs/StarOrange.svg'
        isBorder
      />
      <Categories type={type} />
      <MobileAppWidget />
    </>
  )
}

export default CategoriesView