'use client';
import React, { useState } from 'react';
import { CheckoutLoginModal } from '../../shared/modals';
import { useGlobalContext } from '@/contexts/AppContext';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary';
import { InputField } from '../../shared';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Checkout.module.scss';

const Checkout = () => {
	const { themeColor, cartDetails } = useGlobalContext();
	const [Open, setOpen] = useState<boolean>(false);
	const open = () => {
		setOpen(true);
	};
	const close = () => {
		setOpen(false);
	};
	return (
		<div data-theme={themeColor} className={styles.checkout_container}>
			<div className={styles.checkout_details}>
				<div className={styles.breadcrumbs}>
					<Link href='/cart'>
						<p>Cart</p>
					</Link>
					<div className={styles.arrow}>
						<Image alt='' fill src={`/svgs/chevron-${themeColor}.svg`} />
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
								<input type='checkbox' name='' id='' />
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
							<div className={styles.select_date}>
								<input type='checkbox' name='' id='' />
								<p>Select date and time</p>
							</div>
							<div className={styles.select_date}>
								<input type='checkbox' name='' id='' />
								<p>Immediately</p>
							</div>
						</div>
					</div>
					<div className={styles.payment_details}>
						<h3>Payment Option</h3>
						<div className={styles.payment_options}>
							<div className={styles.fiat_payment}>
								<input type='checkbox' name='' id='' />
								<h3>Pay with card, bank transfer or USSD</h3>
							</div>
							<div className={styles.fiat_payment}>
								<input type='checkbox' name='' id='' />
								<h3>Pay on delivery</h3>
							</div>
							{/* <div className={styles.crypto_payment}>
                            <input type="checkbox" name="" id="" />
                            <div className={styles.icons}>
                                <h3>Pay with crypto</h3>
                                <div className={styles.icon_container}>
                                    {['/svgs/btc.svg', '/svgs/eth.svg', '/svgs/usdt.svg'].map((iconPath, index) =>
                                        <div key={index} className={styles.icon}>
                                            <Image alt='' fill src={iconPath} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div> */}
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
