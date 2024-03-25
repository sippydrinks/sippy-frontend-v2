'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '..';
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';
import Image from 'next/image';
import styles from './Slider.module.scss';

interface Props {
	slides: any[];
}

const Slider = ({ slides }: Props) => {
	const { theme, drinkType }: ContextProps = useGlobalContext();
	const [index, setIndex] = useState<number>(2);
	const lastIndex: number = slides.length as number;
	const [currentIndex, setCurrentIndex] = useState(0);
	const goToPrevSlide = () => {
		setCurrentIndex(prevIndex => 
			(prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
	};
	const goToNextSlide = () => {
		setCurrentIndex(prevIndex => 
			(prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
	};

	useEffect(() => {
		if (index > lastIndex) {
			setIndex(1);
		}
		if (index < 1) {
			setIndex(lastIndex);
		}
	}, [index, lastIndex]);

	const nextPerson = () => {
		setIndex(index + 1);
	};

	const prevPerson = () => {
		setIndex(index - 1);
	};
	return (
		<div className={styles.wrapper}>
			<div className={styles.deals}>
				<Image alt='' fill src={`/svgs/dealsAndOffers-${theme}.svg`}/>
			</div>
			<div className={styles.text}>
				<h1 data-type={theme} className={styles.textHeader}>
					DEALS / OFFERS
				</h1>
				<p data-type={theme} className={styles.textSubtext}>
					Lorem ipsum dolor sit amet consectetur. 
					Amet nibh justo vitae congue tincidunt massa amet duis.
				</p>
			</div>
			<div className={styles.container} data-type={drinkType}>
				<div className={styles.slider}>
					{slides.map((slide: any, index: number) => {
						let position = '';
						if (slide.id === index) {
							position = 'slide__activeSlide';
						}
						if (slide.id === index - 1) {
							position = 'slide__prevSlide';
						}
						if (slide.id === index + 1) {
							position = 'slide__nextSlide';
						}
						return <div className={`${styles.slide} ${styles[position]}`} key={index}></div>;
					})}
				</div>
				<div className={styles.grid}>
					<div className={styles.end}>
						<div className={styles.slider_button_container}>
							<div onClick={() => goToPrevSlide()} data-type={theme} className={styles.slider_button}>
								<div className={styles.icon}>
									<Image src={`/svgs/chevron-${theme}.svg`} fill alt='' />
								</div>
							</div>
							<div data-type={theme} onClick={() => goToNextSlide()} className={styles.slider_button}>
								<div className={styles.icon}>
									<Image src={`/svgs/chevron-${theme}.svg`} fill alt='' />
								</div>
							</div>
						</div>
						<Button className={styles.button}>View All</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;