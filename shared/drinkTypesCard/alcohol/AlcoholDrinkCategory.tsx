import React from 'react'
import DrinkTypeCard from '../drinkTypeCard/DrinkTypeCard'
import AlcoholicDrinkData from '@/mock/AlcoholicDrinkData'
import { useGlobalContext } from '@/contexts/AppContext'
import styles from '../soft/Soft.module.scss'

const Alcohol = () => {
    const { themeColor } = useGlobalContext()
  return (
    <div className={styles.container}>
        {
            AlcoholicDrinkData.map(({id, bglight, bgdark, icon, btnText}: any) => {
                return (
                    <DrinkTypeCard
                        key={id}
                        id={id}
                        icon={icon}
                        bg={themeColor === 'light' ? bglight : bgdark}
                        buttonText={btnText}
                    />
                )
            })
        }
    </div>
  )
}

export default Alcohol