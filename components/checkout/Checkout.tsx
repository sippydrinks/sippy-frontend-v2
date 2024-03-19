'use client';
import React, { useState } from 'react';
import { CheckoutLoginModal } from '../../shared/modals';
import { useGlobalContext } from '@/contexts/AppContext';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary';
import { InputField, Radio } from '../../shared';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Checkout.module.scss';
import DeliveryDetailsForm from './DeliveryDetails/DeliveryDetailsForm';
import CheckBox from '@/shared/checkbox/Checkbox';

const Checkout = () => {
	const { theme, cartDetails } = useGlobalContext();
	const [Open, setOpen] = useState<boolean>(false);
	const [selectedOption, setSelectedOption] = useState<string>('');
	const [selectedShippingOption, setSelectedShippingOption] = useState<string>('');
	const [isGift, setIsGift] = useState<boolean>(false);
	const [selectedAddressId, setSelectedAddressId] = useState<number>(0);
	const [showContactForm, setShowContactForm] = useState<boolean>(false);
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

	const savedAddresses = [
		{
			id: 1,
			address: 'No 1, Oladipo Diya Street, Gudu, Abuja',
			phone_number: '+2348012345678',
			email: 'test@gmail.com',
			name: 'John Doe',
		},
		{
			id: 2,
			address: 'No 2, Oladipo Diya Street, Gudu, Abuja',
			phone_number: '+2348012345678',
			email: 'test2@gmail.com',
			name: 'Jane Doe',
		},
		{
			id: 3,
			address: 'No 3, Oladipo Diya Street, Gudu, Abuja',
			phone_number: '+2348012345678',
			email: 'test3@gmail.com',
			name: 'Sarah Doe',
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
								<CheckBox className={styles.radio_field} checked={isGift} onChange={(e) => setIsGift((prev) => !prev)} />
								<p>This is a gift</p>
							</div>
						</div>
						<div>
							<DeliveryDetailsForm isGift={isGift} savedAddresses={savedAddresses} />
						</div>
					</div>
					<div className={styles.shipping_details}>
						<h3>Shipping method</h3>
						<div className={styles.shipping_options}>
							{shippingOptions.map((option, index) => (
								<div key={index} className={styles.select_date}>
									<Radio onChange={() => setSelectedShippingOption(option.id)} checked={selectedShippingOption === option.id} />
									<p data-active={selectedShippingOption === option.id}>{option.name}</p>
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
									{option.id !== '3' && <h3 data-active={selectedOption === option.id}>{option.name}</h3>}
									{option.id === '3' && (
										<div className={styles.icons}>
											<h3 data-active={selectedOption === option.id}>Pay with crypto</h3>
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
