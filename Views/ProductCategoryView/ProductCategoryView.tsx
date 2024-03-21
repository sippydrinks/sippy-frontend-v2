'use client';
import React from 'react'
import { Carousel, MobileAppWidget } from '@/shared';
import { ProductCategory } from '@/components';

interface ProductCategoryProps {
  nameOfProduct: string
}

const ProductCategoryView = ({nameOfProduct}: ProductCategoryProps) => {
  return (
    <>
      <Carousel
				title={`${nameOfProduct}`}
				isBorder
				icon1="/svgs/juices.svg"
				icon2="/svgs/juices.svg"
			/>
      <ProductCategory productName={nameOfProduct} />
      <MobileAppWidget />
    </>
  )
}

export default ProductCategoryView