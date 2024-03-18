import React, { useState } from 'react'
import { useGlobalContext } from '@/contexts/AppContext';
import { useRouter } from 'next/router';
import styles from './NavButton.module.scss'

const NavButton = () => {
    const router = useRouter()
    const route = router.pathname
    const { themeColor } = useGlobalContext()
    const checkActive = (url: string) => {
      let isActive = url === router.asPath;
  
      return isActive;
    };
    const [drinkType, setDrinkType] = useState(false);
    function ToggleSwitch() {
      drinkType ? setDrinkType(false) : setDrinkType(true);
    };

    const urlArr: string[] = route.split('/')
    const handleNonAlcohol = () => {
      const softUrlArr = urlArr.slice(0, -1)
      route === '/alcohol' ? router.push('/') : router.push(softUrlArr.join('/'))
    }

    const handleAlcohol = () => {
      const alcoholUrlArr = [...urlArr, route === '/' ? 'alcohol' : '/alcohol']
      router.push(alcoholUrlArr.join(''))
    }
    const checkRoute = route.includes('/alcohol')
    
  return (
    <div data-theme={themeColor} className={styles.button}>
      <div
        onClick={() => {
          ToggleSwitch()
          handleNonAlcohol()
        }}
        data-theme={themeColor}
        data-route={checkRoute}
        className={styles.unactive}
      >
        <p className={styles.active_text}>Non-Alcoholic Drinks</p>
      </div>
      <div 
        onClick={() => {
          ToggleSwitch()
          // router.push('/alcohol')
          handleAlcohol()
        }}
        data-theme={themeColor}
        data-route={checkRoute}
        className={styles.unactive2}
      >
        <p className={styles.active_text}>Alcoholic drinks</p>
      </div>
      </div>
  )
}

export default NavButton