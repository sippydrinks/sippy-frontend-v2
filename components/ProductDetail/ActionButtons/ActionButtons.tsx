import React, { useState } from 'react';
import { Counter, Button } from '@/shared';
import { useGlobalContext } from '@/contexts/AppContext';
import styles from './ActionButtons.module.scss';
import Bonanza from '@/shared/Bonanza/Bonanza';

const ActionButtons = ({ price }: { price: number }) => {
	const [counter, setCounter] = useState<number>(1);
	const { cartDetails } = useGlobalContext();

	const handleCountIncrease = () => {
		setCounter((counter) => counter + 1);
	};
	const handleCountDecrease = () => {
		setCounter((counter) => (counter - 1 > 0 ? counter - 1 : counter));
	};

	return (
		<div className={styles.counterAndBtns}>
			<div>
				<div>
					<p className={styles.fadedText}>Quantity</p>
					<div className={styles.counter_mob}>
						<h3 className={styles.productTotalPrice}>₦{price * counter}</h3>
						<Counter counterValue={counter} onDecrement={handleCountDecrease} onIncrement={handleCountIncrease} />
					</div>
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
			<section className={styles.bonanza_container}>
				<Bonanza />
			</section>
		</div>
	);
};

export default ActionButtons;
{
	/* <div className={styles.counterAndBtns_mob}>
			<section className={styles.bonanza_container}>
				<Bonanza />
			</section>
			<div className={styles.counter_mob}>
				<h3>₦10,000</h3>
				<Counter counterValue={counter} onDecrement={handleCountDecrease} onIncrement={handleCountIncrease} />
			</div>
			<div className={styles.btns_container_mob}>
				<Button buttonType='primary' className={styles.addToCartBtn}>
					<h3 className={styles.addToCartText}>Add to cart</h3>
				</Button>

				<Button buttonType='primary' className={styles.buyNowBtn}>
					<h4>Buy now</h4>
				</Button>
			</div>
		</div> */
}
