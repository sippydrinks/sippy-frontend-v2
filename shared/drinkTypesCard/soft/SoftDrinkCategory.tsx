'use client';
import React from 'react'
import SoftDrinksData from '../../../mock/SoftDrinksData'
import DrinkTypeCard from '../drinkTypeCard/DrinkTypeCard'
import { Button } from '@/shared';
import { ContextProps, useGlobalContext } from '@/contexts/AppContext'
import { usePathname, useRouter } from 'next/navigation'
import styles from './Soft.module.scss'

const SoftDrinksCard = () => {
    const { theme }: ContextProps = useGlobalContext()
    const route = usePathname()
    const router = useRouter()
    const isCategoryRoute = route.includes('/categories')
  return (
    <div className={styles.wrapper} data-route={isCategoryRoute}>
        <div className={styles.container}>
            {isCategoryRoute ?
                (SoftDrinksData.map(({id, bglight, bgdark, icon, text}: any) => {
                    return (
                        <DrinkTypeCard
                            key={id}
                            id={id}
                            icon={icon}
                            bg={theme === 'light' ? bglight : bgdark}
                            text={text}
                            cardType='categories'
                        />
                    )
                }))
            :
                (SoftDrinksData.slice(0, 4).map(({id, bglight, bgdark, icon, text}: any) => {
                    return (
                        <DrinkTypeCard
                            key={id}
                            id={id}
                            icon={icon}
                            bg={theme === 'light' ? bglight : bgdark}
                            text={text}
                        />
                    )
                }))
            }
        </div>
        <Button buttonType='primary' onClick={() => router.push('/categories')} className={styles.btn}>
            <h3>See more Categories</h3>
        </Button>
    </div>
  )
}

export default SoftDrinksCard