'use client';
import React from 'react'
import DrinkTypeCard from '../drinkTypeCard/DrinkTypeCard'
import AlcoholicDrinkData from '@/mock/AlcoholicDrinkData'
import { Button } from '@/shared';
import { ContextProps, useGlobalContext } from '@/contexts/AppContext'
import { usePathname, useRouter } from 'next/navigation'
import styles from './Alcohol.module.scss'

const AlcoholicDrinksCard = () => {
    const { theme }: ContextProps = useGlobalContext()
    const router = useRouter()
    const route = usePathname()
    const checkRoute = route.includes('/categories')
  return (
    <div className={styles.wrapper} data-route={checkRoute}>
        <div data-route={checkRoute} className={styles.container}>
            {checkRoute ?
               (AlcoholicDrinkData.map(({id, bglight, bgdark, icon, btnText}: any) => {
                    return (
                        <DrinkTypeCard
                            key={id}
                            id={id}
                            icon={icon}
                            bg={theme === 'light' ? bglight : bgdark}
                            buttonText={btnText}
                        />
                    )
                }))
            : 
               (AlcoholicDrinkData.slice(0, 4).map(({id, bglight, bgdark, icon, btnText}: any) => {
                    return (
                        <DrinkTypeCard
                            key={id}
                            id={id}
                            icon={icon}
                            bg={theme === 'light' ? bglight : bgdark}
                            buttonText={btnText}
                        />
                    )
                }))
            }
        </div>
        <Button buttonType='primary' onClick={() => router.push('/categories/alcohol')} className={styles.btn}>
            <h3>See more Categories</h3>
        </Button>
    </div>
  )
}

export default AlcoholicDrinksCard