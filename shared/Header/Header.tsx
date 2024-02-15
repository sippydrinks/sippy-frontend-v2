// import { navLinks } from '@/mock'
'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Button, Logo } from '@/shared';
import styles from './Header.module.scss';
import ButtonNav from '../buttonNav/ButtonNav';
import ThemeToggle from '../themeToggle/ThemeToggle';
import { useGlobalContext } from '@/contexts/AppContext';
import Image from 'next/image';
// import { navLinks } from "@/mock";

const Header = () => {
	const { theme, drinkType }: any = useGlobalContext();
	const router = useRouter();
	const [collapsed, setCollapsed] = useState<boolean>(true);
	useEffect(() => {
		if (!collapsed) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}

		return () => {
			// Cleanup to remove the class when the component unmounts
			document.body.classList.remove('no-scroll');
		};
	}, [collapsed]);
	const handleNavClick = (id: string) => {
		// scrollTo({ id });
		setCollapsed(true);
	};

	return (
		<header className={`${styles.header}`} data-type={theme} data-value={drinkType}>
			<div className={styles.small_row}>
				{/* <div
					onClick={() => setCollapsed(!collapsed)}
					className={
						styles[collapsed ? "header_hamburger" : "header_hamburger__open"]
					}
				>
					<span className={styles.header_hamburgerBar}></span>
					<span className={styles.header_hamburgerBar}></span>
				</div> */}
				<Hamburger collapsed={collapsed} setCollapsed={setCollapsed} />
				<Link href='/'>
					<div className={styles.header_logoContainer} onClick={() => setCollapsed(true)}>
						<Logo type={theme === 'dark' ? 'light' : 'dark'} />
					</div>
				</Link>
				<div className={styles.desk_view}>
					<ThemeToggle />
				</div>
			</div>
			<div className={styles[!collapsed ? 'header_wrapper' : 'header_wrapper__collapsed']} data-active={!collapsed}>
				<div className={styles.mob_view}>
					<ThemeToggle />
				</div>
				<ButtonNav />
			</div>
			<div className={styles.small_row}>
				<div className={styles.button_container}>
					<div className={styles.button}>
						<Image src={`/svgs/search${theme === 'dark' ? '-dark' : ''}.svg`} fill sizes='100vw' alt=' ' />
					</div>
				</div>
				<div className={styles.button_container}>
					<div className={styles.button}>
						<Image src={`/svgs/bell${theme === 'dark' ? '-dark' : ''}.svg`} fill sizes='100vw' alt='' />
					</div>
				</div>
				<div className={styles.button_container}>
					<div className={styles.button}>
						<Image src={`/svgs/user${theme === 'dark' ? '-dark' : ''}.svg`} fill sizes='100vw' alt='' />
					</div>
				</div>
				<div className={styles.desk_view}>
					<div className={styles.cart_button}>
						<div className={styles.cart_icon}>
							<Image src={`/svgs/cart${theme === 'dark' ? '-dark' : ''}.svg`} fill sizes='100vw' alt='' />
						</div>
						<p>₦0.00 (0)</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

function Hamburger({ collapsed, setCollapsed }: any) {
	const handleToggleClick = () => {
		setCollapsed(!collapsed);
	};
	return (
		<div className={styles.controls}>
			<button aria-hidden='true' onClick={handleToggleClick} aria-pressed={!collapsed}>
				<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='none'>
					<rect width='18' height='1.5' fill='red' ry='0.75' x='3' y='6.25' />
					<rect width='18' height='1.5' fill='red' ry='0.75' x='3' y='11.25' />
					<rect width='18' height='1.5' fill='red' ry='0.75' x='3' y='16.25' />
				</svg>
			</button>
		</div>
	);
}
