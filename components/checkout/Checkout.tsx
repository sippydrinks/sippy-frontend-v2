'use client';
import React, { useState } from 'react';
import { CheckoutLoginModal } from '../../shared/modals';
import { useGlobalContext } from '@/contexts/AppContext';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary';
import { InputField, Radio } from '../../shared';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Checkout.module.scss';

const Checkout = () => {
	const { theme, cartDetails } = useGlobalContext();
	const [Open, setOpen] = useState<boolean>(false);
	const [selectedOption, setSelectedOption] = useState<string>('');
	const [selectedShippingOption, setSelectedShippingOption] = useState<string>('');
	const open = () => {
		setOpen(true);
	};
	const close = () => {
		setOpen(false);
	};

	const paymentOptions = [
		{
			name: 'Pay with card, bank transfer or USSD',
			type: 'fiat_payment',
			id: '1',
			disabled: false,
		},
		{
			name: 'Pay on delivery',
			type: 'fiat_payment',
			id: '2',
			disabled: false,
		},
		{
			name: 'Pay with crypto',
			type: 'crypto_payment',
			id: '3',
			disabled: true,
		},
	];

	const shippingOptions = [
		{
			name: 'Select date and time',
			id: '1',
		},
		{
			name: 'Immediately',
			id: '2',
		},
	];
	return (
		<div data-theme={theme} className={styles.checkout_container}>
			<div className={styles.checkout_details}>
				<div className={styles.breadcrumbs}>
					<Link href='/cart'>
						<p>Cart</p>
					</Link>
					<div className={styles.arrow}>
						<Image alt='' fill src={`/svgs/chevron-${theme}.svg`} />
					</div>
					<p>Shipping</p>
				</div>

				<div className={styles.login_body}>
					<p>
						If you have an account,
						<span onClick={open}> Login </span>
						for a better experience
					</p>
				</div>
				<CheckoutLoginModal modalImage='' isOpen={Open} onClose={close} />

				<div className={styles.checkout_details_content}>
					<div className={styles.delivery_details}>
						<div className={styles.delivery_header}>
							<h3>Delivery details</h3>
							<div className={styles.checkbox_container}>
								<input className={styles.radio_field} type='checkbox' name='' id='' />
								<p>This is a gift</p>
							</div>
						</div>
						<div className={styles.nameAndNumber}>
							<InputField placeholder='My email' />
							<InputField placeholder='My phone number' />
						</div>
						<InputField placeholder='My full name' />
						<InputField placeholder='My address' />
						<InputField inputClass={styles.delivery_note} placeholder='Delivery note (optional)' />
					</div>
					<div className={styles.shipping_details}>
						<h3>Shipping method</h3>
						<div className={styles.shipping_options}>
							{shippingOptions.map((option, index) => (
								<div key={index} className={styles.select_date}>
									<Radio onChange={() => setSelectedShippingOption(option.id)} checked={selectedShippingOption === option.id} />
									<p>{option.name}</p>
								</div>
							))}
						</div>
					</div>
					<div className={styles.payment_details}>
						<h3>Payment Option</h3>
						<div className={styles.payment_options}>
							{paymentOptions.map((option, index) => (
								<div key={index} className={styles[option.type]}>
									<Radio onChange={() => setSelectedOption(option.id)} className={styles.radio_field} checked={selectedOption === option.id} disabled={option.disabled} />
									{option.id !== '3' && <h3>{option.name}</h3>}
									{option.id === '3' && (
										<div className={styles.icons}>
											<h3>Pay with crypto</h3>
											<div className={styles.icon_container}>
												{['/svgs/btc.svg', '/svgs/eth.svg', '/svgs/usdt.svg'].map((iconPath, index) => (
													<div key={index} className={styles.icon}>
														<Image alt='' fill src={iconPath} />
													</div>
												))}
											</div>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.divider}></div>
			<CheckoutSummary />
		</div>
	);
};

export default Checkout;