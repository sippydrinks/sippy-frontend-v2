'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';
import Image from 'next/image';
import styles from './ThemeToggle.module.scss';

const ThemeToggle = () => {
	const { theme, setTheme }: ContextProps = useGlobalContext();
	const [imageUrl, setImageUrl] = useState<string>('/svgs/light-mode.svg');
	const route = usePathname()
	const urlCheck = route.includes('/alcohol')

	const handleToggle = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		setImageUrl(theme === 'light' ? '/svgs/dark-mode.svg' : '/svgs/light-mode.svg');
	};
	return (
		<div onClick={handleToggle} data-type={urlCheck} className={styles.container} data-theme={theme}>
			<div className={styles.image}>
				<Image alt="toggle" fill src={`/svgs/${theme}ModeToggle.svg`} />
			</div>
		</div>
	);
};

export default ThemeToggle;
