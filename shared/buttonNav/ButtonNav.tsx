'use client';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';
import Button from '../button/Button';
import styles from './ButtonNav.module.scss';
import { useGlobalContext } from '@/contexts/AppContext';

const ButtonNav = () => {
	const { drinkType, theme }: any = useGlobalContext();
	const router = useRouter();
	const route = usePathname()

	// function to check if the button is active
	const checkActive = (url: string) => {
		let isActive = url === route;
		return isActive;
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
		<div className={styles.container} data-type={theme}>
			<div
				className={styles.button_container}
				onClick={() => {
					// router.push('/');
					handleNonAlcohol()
				}}>
				<div className={styles.button} data-active={checkActive('/')} data-route={checkRoute}>
					Non-Alcoholic Drinks
				</div>
			</div>
			<div
				className={styles.button_container}
				onClick={() => {
					// router.push('/alcohol');
					handleAlcohol()
				}}>
				<div className={styles.button} data-active={checkActive('/alcohol')} data-route={checkRoute}>
					Alcoholic Drinks
				</div>
			</div>
		</div>
	);
};

export default ButtonNav;
