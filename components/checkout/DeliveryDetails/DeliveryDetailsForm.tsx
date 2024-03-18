import { Button, InputField } from '@/shared';
import React from 'react';
import styles from './DeliveryDetailsForm.module.scss';

const DeliveryDetailsForm = () => {
	return (
		<form>
			<div className={styles.nameAndNumber}>
				<InputField className={styles.input} placeholder='My email' />
				<InputField
					className={styles.input}
					customPrefix={
						<p className={styles.prefix_container}>
							+234 <span className={styles.prefix_divider}></span>
						</p>
					}
					type='number'
					placeholder={`Receiver's phone number`}
				/>
			</div>
			<InputField className={styles.input} placeholder='My full name' />
			<InputField className={styles.input} placeholder='My address' />
			<InputField className={styles.input} inputClass={styles.delivery_note} placeholder='Delivery note (optional)' />
			<Button disabled buttonType='transparent' className={styles.applyDiscount_btn}>
				<h4>Save Details</h4>
			</Button>
		</form>
	);
};

export default DeliveryDetailsForm;
