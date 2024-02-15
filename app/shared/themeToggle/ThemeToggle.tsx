'use client';
import React, { useState } from 'react';
import styles from './ThemeToggle.module.scss';
import Image from 'next/image';
import { useGlobalContext } from '@/app/contexts/AppContext';

const ThemeToggle = () => {
	const { theme, setTheme }: any = useGlobalContext();
	const [imageUrl, setImageUrl] = useState<string>('/svgs/light-mode.svg');

	const handleToggle = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		setImageUrl(theme === 'light' ? '/svgs/dark-mode.svg' : '/svgs/light-mode.svg');
		// if (theme === "light") {
		// 	setTheme("dark");
		// 	setImageUrl("/svgs/dark-mode.svg");
		// 	return;
		// }
		// setTheme("light");
		// setImageUrl("/svgs/light-mode.svg");
	};
	return (
		<div className={styles.container} data-type={theme}>
			<div className={styles.image} onClick={handleToggle}>
				<Image src={theme !== 'light' ? '/svgs/dark-mode.svg' : '/svgs/light-mode.svg'} fill sizes='100vw' alt='' />
			</div>
		</div>
	);
};

export default ThemeToggle;
