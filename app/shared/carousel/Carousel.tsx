'use client';
import React from 'react';
import styles from './Carousel.module.scss';
import Image from 'next/image';
import { ContextProps, useGlobalContext } from '@/app/contexts/AppContext';

interface Props {
	title: string;
	className?: string;
	type?: 'small' | 'large';
}

const Carousel = ({ title, className, type = 'small' }: Props) => {
	const { theme }: ContextProps = useGlobalContext();
	return (
		<div className={`${styles.container} ${className}`} data-type={theme}>
			<div className={`${styles.row}`}>
				<div className={styles.icon}>
					<Image src='/svgs/star-yellow.svg' fill sizes='100vw' alt='' />
				</div>
				<div className={styles.text}>
					<h1>{title}</h1>
				</div>
				<div className={styles.icon}>
					<Image src='/svgs/star-orange.svg' fill sizes='100vw' alt='' />
				</div>
				<div className={styles.text}>
					<h1>{title}</h1>
				</div>
				<div className={styles.icon}>
					<Image src='/svgs/star-yellow.svg' fill sizes='100vw' alt='' />
				</div>
				<div className={styles.text}>
					<h1>{title}</h1>
				</div>
				<div className={styles.icon}>
					<Image src='/svgs/star-orange.svg' fill sizes='100vw' alt='' />
				</div>
				<div className={styles.text}>
					<h1>{title}</h1>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
