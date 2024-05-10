'use client';
import React, { useState } from 'react';
import { Button, Counter } from '../../../../shared';
import { toast } from 'react-hot-toast';
import { ProductFilterButton } from '..';
import { useGlobalContext } from '@/contexts/AppContext';
import styles from './ProductQtySummary.module.scss';
import { DiscountSvg } from '@/shared/svgs/jsx';
import Bonanza from '@/shared/Bonanza/Bonanza';
import ActionButtons from '../../ActionButtons/ActionButtons';

const ProductQtySummary = ({ data, price, size, isSticky }: any) => {
	const { theme, setCart, cart } = useGlobalContext();
	const [counter, setCounter] = useState<number>(1);
	const handleCountIncrease = () => {
		setCounter((counter) => counter + 1);
	};
	const handleCountDecrease = () => {
		setCounter((counter) => (counter - 1 > 0 ? counter - 1 : counter));
	};
	const localCart = cart;
	const itemIndex = localCart.findIndex((item: any) => item.id === data.id);
	

	return (
		<div data-theme={theme } className={`${styles.productQtySummaryContainer} ${isSticky && styles.is_sticky}`}>
			<h2 className={styles.productPrice}>₦{price * counter}</h2>

			<div className={styles.quantityBtn}>
				<div>
					<p className={styles.fadedText}>Select size</p>
				</div>
				<div className={styles.productQtyBtnCont}>
					{['50CL x 12', `${size} x 12`, `${size} x 24`].map((item, index) => (
						<ProductFilterButton key={index}>
							<span className={styles.productSizes}>{item}</span>
						</ProductFilterButton>
					))}
				</div>
			</div>
			<ActionButtons counter={counter} 
				handleCountDecrease={handleCountDecrease} 
				handleCountIncrease={handleCountIncrease} 
				price={price} 
			/>
		</div>
	);
};

export default ProductQtySummary;
