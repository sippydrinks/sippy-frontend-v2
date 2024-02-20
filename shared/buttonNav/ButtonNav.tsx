'use client';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../button/Button';
import styles from './ButtonNav.module.scss';
import { useGlobalContext } from '@/contexts/AppContext';

const ButtonNav = () => {
	const { drinkType, theme }: any = useGlobalContext();
	const router = useRouter();

	// function to check if the button is active
	const checkActive = (url: string) => {
		let isActive = url === router.asPath;
		return isActive;
	};

	return (
		<div className={styles.container} data-type={theme}>
			<Button
				buttonType='transparent'
				className={styles.button_container}
				onClick={() => {
					router.push('/');
				}}>
				<div className={styles.button} data-active={checkActive('/')} data-type={drinkType}>
					Soft Drinks
				</div>
			</Button>
			<Button
				buttonType='transparent'
				className={styles.button_container}
				onClick={() => {
					router.push('/alcohol');
				}}>
				<div className={styles.button} data-active={checkActive('/alcohol')} data-type={drinkType}>
					Alcoholic Drinks
				</div>
			</Button>
		</div>
	);
};

export default ButtonNav;
