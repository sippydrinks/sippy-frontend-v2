'use client';
import React from 'react';
import { CarouselProps } from '@/interface';
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';
import Image from 'next/image';
import styles from './Carousel.module.scss';

const Carousel = ({ title, icon1, icon2, bgColor, isBorder = false, type = 'small' }: CarouselProps) => {
	const { theme }: ContextProps = useGlobalContext();
	return (
		<div className={styles.container} data-type={type} data-isborder={isBorder} 
			data-theme={theme} style={{background: `${bgColor}`}}
		>
			<div className={`${styles.row}`}>
				<div className={styles.icon}>
					<Image src={icon1} fill alt='' />
				</div>
				<div className={styles.text}>
					<h1>{title}</h1>
				</div>
				<div className={styles.icon}>
					<Image src={icon2} fill alt='' />
				</div>
				<div className={styles.text}>
					<h1>{title}</h1>
				</div>
				<div className={styles.icon}>
					<Image src={icon1} fill alt='' />
				</div>
				<div className={styles.text}>
					<h1>{title}</h1>
				</div>
				<div className={styles.icon}>
					<Image src={icon2} fill alt='' />
				</div>
				<div className={styles.text}>
					<h1>{title}</h1>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
