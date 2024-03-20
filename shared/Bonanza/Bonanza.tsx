import React from 'react';
import { DiscountSvg } from '../svgs/jsx';
import styles from './Bonanza.module.scss';

const Bonanza = () => {
	return (
		<div className={styles.bonus_container}>
			<span className={styles.discount_icon}>
				<DiscountSvg />
			</span>
			<p>Buy 5 and get 1 free sharply now now. You snooze you lose</p>
		</div>
	);
};

export default Bonanza;
