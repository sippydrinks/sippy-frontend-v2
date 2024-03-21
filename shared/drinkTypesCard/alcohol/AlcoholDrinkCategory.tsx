'use client';
import React from 'react';
import DrinkTypeCard from '../drinkTypeCard/DrinkTypeCard';
import AlcoholicDrinkData from '@/mock/AlcoholicDrinkData';
import { Button } from '@/shared';
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Alcohol.module.scss';

const AlcoholicDrinksCard = () => {
    const { theme }: ContextProps = useGlobalContext()
    const router = useRouter()
    const route = usePathname()
    const checkRoute = route.includes('/categories')
  return (
    <div className={styles.wrapper} data-route={checkRoute}>
        <div data-route={checkRoute} className={styles.container}>
            {checkRoute ?
               (AlcoholicDrinkData.map(({id, bglight, bgdark, icon, text}: any) => {
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
               (AlcoholicDrinkData.slice(0, 4).map(({id, bglight, bgdark, icon, text}: any) => {
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
        <Button buttonType='primary' onClick={() => router.push('/alcohol/categories')} className={styles.btn}>
            <h3>See more Categories</h3>
        </Button>
    </div>
  )
}

export default AlcoholicDrinksCard;
