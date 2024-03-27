import React, { useEffect, useState } from 'react';
import { Button, InputField } from '@/shared';
import { useGlobalContext } from '@/contexts/AppContext';
import { ViewcartModal } from '@/shared/modals';
import { formatNum } from '@/utils';
import styles from './CheckoutSummary.module.scss';

interface Props {
	activateProceedBtn: boolean;
}

const CheckoutSummary = ({ activateProceedBtn }: Props) => {
	const { themeColor, cartDetails } = useGlobalContext();
	const [couponValue, setCouponValue] = useState<string>('');
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [discount, setDiscount] = useState<number>(0);
	const [totalCost, setTotalCost] = useState<number>(0);
	const [applyBtnText, setApplyBtnText] = useState<string>('Apply');
	const [isCouponApplied, setIsCouponApplied] = useState<boolean>(false);
	const [couponResponse, setCouponResponse] = useState({
		error: false,
		success: false,
	});

	const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};
	const deliveryFee: number = 1200;
	const VAT: number = 400;
	const amountInCart: number = cartDetails.cartAmount;

	useEffect(() => {
		setTotalCost(amountInCart + deliveryFee + VAT - discount);
	}, [amountInCart, deliveryFee, VAT, discount]);

	// a function to handle the application of the coupon
	const handleApplyCoupon = () => {
		isCouponApplied ? removeCoupon() : applyCoupon();
	};

	// a function to apply the coupon
	const applyCoupon = () => {
		setIsCouponApplied(true);
		setDiscount(200);
		setApplyBtnText('Remove Discount');
		setCouponResponse({ ...couponResponse, error: false, success: true });
	};

	// a function to remove the coupon
	const removeCoupon = () => {
		setIsCouponApplied(false);
		setDiscount(0);
		setApplyBtnText('Apply');
	};

	return (
		<div data-theme={themeColor} className={styles.checkout_summary}>
			<h5 className={styles.summary_header}>Summary</h5>
			<div className={styles.summary_details}>
				<div className={styles.input_container}>
					<div className={styles.input_error_container}>
						<InputField inputClass={`${couponResponse.error && styles.error_class} ${isCouponApplied && styles.coupon_success_class}`} value={couponValue} onChange={(e) => setCouponValue(e.target.value)} label='Discount code' placeholder='Enter discount code' />
						{couponResponse.error && <p className={styles.coupon_error_text}>This coupon is invalid</p>}
					</div>
					<Button onClick={handleApplyCoupon} disabled={!couponValue} buttonType='transparent' className={`${!couponValue ? styles.applyDiscount_btn : styles.applyDiscount_btnActive} ${isCouponApplied && styles.applied_btn}`}>
						<h4>{applyBtnText}</h4>
					</Button>
				</div>
				<div className={styles.summary_body}>
					<p>Total Items ({cartDetails.cartQuantity})</p>
					<h3 onClick={openModal} className={styles.view_cart}>
						View cart
					</h3>
				</div>
				<div className={styles.summary_body}>
					<p>Subtotal</p>
					<h3>₦{cartDetails.cartAmount}</h3>
				</div>
				<div className={`${styles.summary_body} ${!discount && styles.hide_details} ${styles.discount}`}>
					<p>Discount</p>
					<h3>-₦{discount}</h3>
				</div>
				<div className={styles.summary_body}>
					<p>VAT</p>
					<h3>₦{cartDetails.cartAmount === 0 ? 0.0 : VAT}</h3>
				</div>
				<div className={styles.summary_body}>
					<p>Delivery fee</p>
					<h3>₦{cartDetails.cartAmount === 0 ? 0.0 : deliveryFee}</h3>
				</div>
				<div className={styles.line}></div>
				<div className={styles.summary_body}>
					<p>Total</p>
					<h5 className={styles.total}>₦{cartDetails.cartAmount === 0 ? 0.0 : formatNum(totalCost)}</h5>
				</div>
			</div>
			<Button buttonType='primary' disabled={!activateProceedBtn} className={`${activateProceedBtn ? styles.summary_btn_active : styles.summary_btn}`}>
				<h3>Proceed</h3>
			</Button>
			<ViewcartModal isOpen={isOpen} onClose={closeModal} />
		</div>
	);
};

export default CheckoutSummary;
