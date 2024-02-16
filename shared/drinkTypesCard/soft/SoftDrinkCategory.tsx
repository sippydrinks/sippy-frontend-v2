import React, { use } from 'react'
import SoftDrinksData from '../../../mock/SoftDrinksData'
import DrinkTypeCard from '../drinkTypeCard/DrinkTypeCard'
import { useGlobalContext } from '@/contexts/AppContext'
import styles from './Soft.module.scss'

const SoftDrinkCategory = () => {
    const { theme } = useGlobalContext()
  return (
    <div className={styles.container}>
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

export default SoftDrinkCategory