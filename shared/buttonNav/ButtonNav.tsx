'use client';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';
import styles from './ButtonNav.module.scss';
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';

const ButtonNav = () => {
	const { theme }: ContextProps = useGlobalContext();
	const router = useRouter();
	const route = usePathname();

	const checkActive = route.includes('/alcohol')
	const categoriesRoute = route === ('/categories')
	const urlArr: string[] = route.split('/')
    const handleNonAlcohol = () => {
      const softUrlArr = urlArr.slice(0, -1)
      route === '/alcohol' ? router.push('/') : router.push(softUrlArr.join('/'))
    }

    const handleAlcohol = () => {
      const alcoholUrlArr = [...urlArr, route === '/' ? 'alcohol' : '/alcohol']
      categoriesRoute ? router.push('/alcohol/categories') : router.push(alcoholUrlArr.join(''))
    }
    const checkRoute = route.includes('/alcohol')

	return (
		<div className={styles.container} data-type={theme}>
			<div className={styles.button_container} onClick={handleNonAlcohol}>
				<div className={styles.button} data-active={checkActive}>
					Non-Alcoholic Drinks
				</div>
			</div>
			<div className={styles.button_container} onClick={handleAlcohol}>
				<div className={styles.button} data-route={checkRoute}>
					Alcoholic Drinks
				</div>
			</div>
		</div>
	);
};

export default ButtonNav;
