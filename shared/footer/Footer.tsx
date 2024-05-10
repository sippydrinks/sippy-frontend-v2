'use client';
import React, { useEffect, useRef } from 'react';
import { Carousel } from '..';
import { DrinkTypeProps } from '@/interface';
import { useGlobalContext } from '@/contexts/AppContext';
import { footerNavItems } from '@/mock';
import { footerNavItemsProps } from '@/interface/home';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = ({ type }: DrinkTypeProps) => {
	const { setCategoryHeight } = useGlobalContext();
	const footerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const heightOfComponent = footerRef.current?.offsetHeight;
		setCategoryHeight(heightOfComponent);
	}, [setCategoryHeight]);
	return (
		<footer className={styles.footer} ref={footerRef}>
			<div className={styles.footer_body}>
				<div className={styles.footer_nav}>
					<div className={styles.company_support}>
						<div className={styles.company}>
							<h3>Company</h3>
							<p>About Us</p>
						</div>
						<div className={styles.support}>
							<h3>Support</h3>
							<p>Contact us</p>
						</div>
					</div>
					<div className={styles.socials}>
						<h3>Social Media</h3>
						<div className={styles.icons}>
							{footerNavItems.map((item: footerNavItemsProps, index: number) => {
								return (
									<Link href={item.link} key={index}>
										<div className={styles.icon}>
											<Image alt='icon' src={item.imgSrc} fill />
										</div>
									</Link>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.carousel_container}>
				<Carousel 
					icon1={type === 'soft' ? '/svgs/StarOrange.svg' : '/svgs/whiteStar.svg'} 
					icon2={type === 'soft' ? '/svgs/StarOrange.svg' : '/svgs/whiteStar.svg'} 
					title='sippy life' 
					type='big' 
				/>
			</div>
		</footer>
	);
};

export default Footer;
