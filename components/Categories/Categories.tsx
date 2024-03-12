'use client';
import React from 'react'
import { DrinkTypeProps } from '@/interface';
import { Catalog } from '../Home';
import { SoftDrinksCard, AlcoholicDrinksCard } from '@/shared';

const Categories = ({type }: DrinkTypeProps) => {
  return (
    <div>
      {type === 'soft' ? <SoftDrinksCard /> : <AlcoholicDrinksCard />}
      <Catalog />
    </div>
  )
}

export default Categories