'use client';
import React, { useEffect, useState } from 'react';
import { CheckoutLoginModal } from '../../shared/modals';
import { useGlobalContext } from '@/contexts/AppContext';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary';
import { InputField, Radio, Select } from '../../shared';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Checkout.module.scss';
import DeliveryDetailsForm from './DeliveryDetails/DeliveryDetailsForm';
import CheckBox from '@/shared/checkbox/Checkbox';
import { useAuth } from '@/contexts/AuthContext';
import { paymentOptions, shippingOptions, timeOptions } from '@/utils/checkout';

export interface DateOption {
	date: string;
	time: string;
}
export interface ShippingOption {
	id: string;
	label: string;
	value: string | DateOption | undefined;
}

const Checkout = () => {
	const { theme, cartDetails } = useGlobalContext();
	const { isAuthenticated } = useAuth();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [showLoginModal, setShowLoginModal] = useState(isOpen);
	const [showSignupModal, setShowSignupModal] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string>('1');
	const [shippingOptionId, setShippingOptionId] = useState<string>('');
	const [shippingOption, setShippingOption] = useState<ShippingOption | undefined>(undefined);
	const [isGift, setIsGift] = useState<boolean>(false);
	const [activateProceedBtn, setActivateProceedBtn] = useState<boolean>(false);
	const [shippingDate, setShippingDate] = useState<string>('');
	const [shippingTime, setShippingTime] = useState<string>('');

	const getShippingOption = (id: string) => {
		const option = shippingOptions.find((option) => option.id === id);
		if (id === '1') {
			if (shippingDate && shippingTime) {
				setShippingOption({ value: { date: shippingDate, time: shippingTime }, id: '1', label: 'Scheduled delivery' });
			}
		} else {
			setShippingOption(option);
		}
	};

	useEffect(() => {
		console.log(shippingDate, shippingTime);
		if (shippingOptionId) {
			getShippingOption(shippingOptionId);
		}
	}, [shippingOptionId, shippingDate, shippingTime]);

	// a function to get the shipping time
	const onOptionChange = (option: string) => {
		console.log(option);
		setShippingTime(option);
	};

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

				<div data-auth={isAuthenticated} className={styles.login_body}>
					<p>
						If you have an account,
						<span onClick={() => setShowLoginModal(true)}> Login </span>
						for a better experience
					</p>
				</div>

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
							<DeliveryDetailsForm isGift={isGift} showLoginModal={showLoginModal} showSignupModal={showSignupModal} setShowLoginModal={setShowLoginModal} setShowSignupModal={setShowSignupModal} setActivateProceedBtn={setActivateProceedBtn} shippingOption={shippingOption} />
						</div>
					</div>
					<div className={styles.shipping_details}>
						<h3>Shipping method</h3>
						<div className={styles.shipping_options_container}>
							<div className={styles.shipping_options}>
								{shippingOptions.map((option, index) => (
									<div key={index} className={styles.select_date}>
										<Radio onChange={() => setShippingOptionId(option.id)} checked={shippingOptionId === option.id} />
										<p data-active={shippingOptionId === option.id}>{option?.label}</p>
									</div>
								))}
							</div>
							<div data-visible={shippingOptionId === '1'} className={`${styles.shipping_date_fields_container} `}>
								<div className={styles.fields}>
									<InputField type='date' label='Date' value={shippingDate} onChange={(e) => setShippingDate(e.target.value)} />
								</div>
								<div className={styles.fields}>
									<Select options={timeOptions} label='Time' onOptionChange={onOptionChange} />
								</div>
							</div>
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
										<div className={`${styles.icons} ${styles.fade_opacity}`}>
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
			<CheckoutSummary activateProceedBtn={activateProceedBtn} />
		</div>
	);
};

export default Checkout;
