'use client';
import React from 'react'
import SoftDrinksData from '../../../mock/SoftDrinksData'
import DrinkTypeCard from '../drinkTypeCard/DrinkTypeCard'
import { ContextProps, useGlobalContext } from '@/contexts/AppContext'
import { usePathname } from 'next/navigation'
import styles from './Soft.module.scss'

const SoftDrinksCard = () => {
    const { theme }: ContextProps = useGlobalContext()
    const route = usePathname()
    const checkRoute = route.includes('/categories')
  return (
    <div data-route={checkRoute} className={styles.container}>
        {
            SoftDrinksData.map(({id, bglight, bgdark, icon, btnText}: any) => {
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

export default SoftDrinksCard