import React, { useState } from 'react';
import { Button, Counter } from '../../../../shared';
import { toast } from 'react-toastify';
import { ProductFilterButton } from '..';
import { useGlobalContext } from '@/contexts/AppContext';
import styles from './ProductQtySummary.module.scss';
import { DiscountSvg } from '@/shared/svgs/jsx';
import Bonanza from '@/shared/Bonanza/Bonanza';
import ActionButtons from '../../ActionButtons/ActionButtons';

const ProductQtySummary = ({ data, price, size, isSticky }: any) => {
	const { themeColor, setCart, cart } = useGlobalContext();
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
		<div data-theme={themeColor} className={`${styles.productQtySummaryContainer} ${isSticky && styles.is_sticky}`}>
			<div>
				<h2 className={styles.productPrice}>₦{price}</h2>
			</div>

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
			<ActionButtons price={price} />
		</div>
	);
};

export default ProductQtySummary;
