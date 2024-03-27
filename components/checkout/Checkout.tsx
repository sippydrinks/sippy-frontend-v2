'use client';
import React, { useState } from 'react';
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
import { useCheckout } from '@/hooks';

export enum ShippingOptionsEnum {
	Immediate = 'Immediate',
	Scheduled = 'Scheduled',
}
export interface ShippingOption {
	label: string;
	type?: ShippingOptionsEnum;
	date?: string;
	time?: string;
}

export interface ScheduledShippingDetails {
	date?: string;
	time?: string;
}

const Checkout = () => {
	const { theme, isAuthenticated, showModal, selectedPaymentOption, shippingOption, isGift, activateProceedBtn, scheduledShippingDetails, getShippingOption, onOptionChange, handleProceed, toggleLoginModal, toggleSignupModal, setActivateProceedBtn, setIsGift, setScheduledShippingDetails, setSelectedPaymentOption, setShippingOption } = useCheckout();

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
						<span onClick={() => toggleLoginModal(true)}> Login </span>
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
							<DeliveryDetailsForm isGift={isGift} showLoginModal={showModal.showLoginModal} showSignupModal={showModal.showSignupModal} setShowLoginModal={toggleLoginModal} setShowSignupModal={toggleSignupModal} setActivateProceedBtn={setActivateProceedBtn} shippingOption={shippingOption} />
						</div>
					</div>
					<div className={styles.shipping_details}>
						<h3>Shipping method</h3>
						<div className={styles.shipping_options_container}>
							<div className={styles.shipping_options}>
								{shippingOptions.map((option, index) => (
									<div key={index} className={styles.select_date}>
										<Radio
											onChange={() => {
												setShippingOption(undefined);
												getShippingOption(option.type);
											}}
											checked={shippingOption?.type === option.type}
										/>
										<p data-active={shippingOption?.type === option.type}>{option?.label}</p>
									</div>
								))}
							</div>
							<div data-visible={shippingOption?.type === ShippingOptionsEnum.Scheduled} className={`${styles.shipping_date_fields_container} `}>
								<div className={styles.fields}>
									<InputField type='date' label='Date' value={scheduledShippingDetails?.date} onChange={(e) => setScheduledShippingDetails((prev) => ({ ...prev, date: e.target.value }))} />
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
									<Radio onChange={() => setSelectedPaymentOption(option.id)} className={styles.radio_field} checked={selectedPaymentOption === option.id} disabled={option.disabled} />
									{option.id !== '3' && <h3 data-active={selectedPaymentOption === option.id}>{option.name}</h3>}
									{option.id === '3' && (
										<div className={`${styles.icons} ${styles.fade_opacity}`}>
											<h3 data-active={selectedPaymentOption === option.id}>Pay with crypto</h3>
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
