'use client';
import React from 'react'
import DrinkTypeCard from '../drinkTypeCard/DrinkTypeCard'
import AlcoholicDrinkData from '@/mock/AlcoholicDrinkData'
import { ContextProps, useGlobalContext } from '@/contexts/AppContext'
import { usePathname } from 'next/navigation'
import styles from '../soft/Soft.module.scss'

const AlcoholicDrinksCard = () => {
    const { theme }: ContextProps = useGlobalContext()
    const route = usePathname()
    const checkRoute = route.includes('/categories')
  return (
    <div data-route={checkRoute} className={styles.container}>
        {
            AlcoholicDrinkData.map(({id, bglight, bgdark, icon, btnText}: any) => {
                return (
                    <DrinkTypeCard
                        key={id}
                        id={id}
                        icon={icon}
                        bg={theme === 'light' ? bglight : bgdark}
                        buttonText={btnText}
                    />
                )
            })
        }
    </div>
  )
}

export default AlcoholicDrinksCard