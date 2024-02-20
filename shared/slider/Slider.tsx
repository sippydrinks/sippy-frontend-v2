'use client';
import React, { useEffect, useState } from 'react';
import styles from './Slider.module.scss';
import { Button } from '..';
import Image from 'next/image';
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';

interface Props {
	slides: any[];
}

const Slider = ({ slides }: Props) => {
	const { theme, drinkType }: ContextProps = useGlobalContext();
	const [index, setIndex] = useState<number>(2);
	const lastIndex: number = slides.length as number;

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
						// if (
						// 	slide.id === index - 1 ||
						// 	(index === 0 && slide.id === lastIndex)
						// ) {
						// 	position = "slide__lastSlide";
						// }
						return <div className={`${styles.slide} ${styles[position]}`} key={index}></div>;
					})}
				</div>
				<div className={styles.grid}>
					<div className={styles.end}>
						<div className={styles.slider_button_container}>
							<div onClick={() => prevPerson()} data-type={theme} className={styles.slider_button}>
								<div className={styles.icon}>
									<Image src={`/svgs/chevron-${theme}.svg`} fill alt='' />
								</div>
							</div>
							<div data-type={theme} onClick={() => nextPerson()} className={styles.slider_button}>
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