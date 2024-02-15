'use client';
import React, { useEffect, useState } from 'react';
import styles from './Slider.module.scss';
import { Button } from '..';
import Image from 'next/image';
import { useGlobalContext } from '@/app/contexts/AppContext';

interface Props {
	slides: any[];
}

const Slider = ({ slides }: Props) => {
	const { drinkType }: any = useGlobalContext();
	const [index, setIndex] = useState<number>(2);
	const lastIndex: number = slides.length;

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
		<div className={styles.container} data-type={drinkType}>
			<div className={styles.slider}>
				{slides.map((slide: any) => {
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
					return <div className={`${styles.slide} ${styles[position]}`} key={slide.id}></div>;
				})}
			</div>
			<div className={styles.grid}>
				<div className={styles.end}>
					<div className={styles.slider_button_container}>
						<Button
							buttonType='transparent'
							// onClick={() => prevPerson()}
							className={styles.slider_button}>
							<Image src='/svgs/chevron.svg' fill sizes='100vw' alt='' />
						</Button>
						<Button
							buttonType='transparent'
							// onClick={() => nextPerson()}
							className={styles.slider_button}>
							<Image src='/svgs/chevron.svg' fill sizes='100vw' alt='' />
						</Button>
					</div>
					<Button className={styles.button}>View All</Button>
				</div>
			</div>
		</div>
	);
};

export default Slider;
