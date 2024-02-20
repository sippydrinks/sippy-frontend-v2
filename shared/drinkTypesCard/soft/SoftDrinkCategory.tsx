import React, { use } from 'react'
import SoftDrinksData from '../../../mock/SoftDrinksData'
import DrinkTypeCard from '../drinkTypeCard/DrinkTypeCard'
import { useGlobalContext } from '@/contexts/AppContext'
import styles from './Soft.module.scss'

const Soft = () => {
    const { themeColor } = useGlobalContext()
  return (
    <div className={styles.container}>
        {
            SoftDrinksData.map(({id, bglight, bgdark, icon, btnText}: any) => {
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

export default Soft