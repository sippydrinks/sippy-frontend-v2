import React from 'react'
import Link from 'next/link'
import styles from './Dropdown.module.scss'
import { useGlobalContext } from '@/contexts/AppContext'

const Dropdown = () => {
    const { theme } = useGlobalContext()
  return (
    <div data-theme={theme} className={styles.dropdowncontainer}>
        <Link href='/account'>
            <div className={styles.dropdownItem}>
                <h3>My Account</h3>
            </div>
        </Link>
        <div className={styles.divider}></div>
        <Link href='/fundMyDrink'>
            <div className={styles.dropdownItem}>
                <h3>Fund My drink</h3>
            </div>
        </Link>
        <div className={styles.divider}></div>
        <Link href='/giftcards'>
            <div className={styles.dropdownItem}>
                <h3>Giftcards</h3>
            </div>
        </Link>
    </div>
  )
}

export default Dropdown