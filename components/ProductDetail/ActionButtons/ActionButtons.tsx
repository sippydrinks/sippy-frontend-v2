'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Counter, Button } from '@/shared';
import { useGlobalContext } from '@/contexts/AppContext';
import styles from './ActionButtons.module.scss';
import Bonanza from '@/shared/Bonanza/Bonanza';
interface ActionButtonsProps {
	price?: number
	counter?: number
	handleCountIncrease: () => void
	handleCountDecrease: () => void
}

const ActionButtons = ({ price, handleCountIncrease, handleCountDecrease, counter }: ActionButtonsProps) => {
	const { cartDetails } = useGlobalContext();
	const bottomRef = useRef<HTMLDivElement>(null);
	const targetRef = document.getElementById('target_container')!;
	const [isFixed, setIsFixed] = useState(false);
	const [bottomPosition, setBottomPosition] = useState(0);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// Update our state when target element is visible and fully intersecting
				setIsFixed(entry.isIntersecting);
			},
			{ threshold: [1] } // Trigger when all part of the destination element is visible
		);

		if (targetRef) {
			observer.observe(targetRef);
		}

		return () => {
			if (targetRef) {
				observer.unobserve(targetRef);
			}
		};
	}, [targetRef]);

	useEffect(() => {
		const calculateBottomPosition = () => {
			if (targetRef && bottomRef.current) {
				const targetRect = targetRef.getBoundingClientRect();
				const viewportHeight = window.innerHeight;

				// Set bottom position of the action buttons container to the distance between the bottom of the target container and the bottom of the viewport
				setBottomPosition(viewportHeight - targetRect.bottom);
			}
		};

		calculateBottomPosition();
		window.addEventListener('scroll', calculateBottomPosition);
		return () => window.removeEventListener('scroll', calculateBottomPosition);
	}, [isFixed, targetRef]);

	return (
		<div ref={bottomRef} className={styles.container} style={{ bottom: isFixed ? bottomPosition + 'px' : 0 }}>
			<div className={styles.counterAndBtns}>
				<div>
					{/* <p className={styles.fadedText}>Quantity</p> */}
					<div className={styles.counter_mob}>
						{/* <h3 className={styles.productPrice}>₦{price}</h3> */}
						<Counter counterValue={counter}
							onDecrement={handleCountDecrease}
							onIncrement={handleCountIncrease}
						/>
					</div>

					<div className={styles.btns_container}>
						<Button buttonType='primary' className={styles.addToCartBtn}>
							<h3 className={styles.addToCartText}>Add to cart</h3>
						</Button>

						<Button buttonType='primary' className={styles.buyNowBtn}>
							<h4>Buy now</h4>
						</Button>
					</div>
				</div>
				{/* <section className={styles.bonanza_container}>
					<Bonanza />
				</section> */}
			</div>
			<div className='bottom-placeholder' />
		</div>
	);
};

export default ActionButtons;
