import React, { useEffect } from 'react';
import styles from './FormFields.module.scss';
import { InputField } from '@/shared';

const FormFields = ({ loading, register, isGift }: any) => {
	const [placeholders, setPlaceholders] = React.useState({
		email: 'My email',
		phone_number: 'My phone number',
		name: 'My full name',
		address: 'My address',
	});

	useEffect(() => {
		if (isGift) {
			setPlaceholders({
				email: "Recipient's email",
				phone_number: "Recipient's phone number",
				name: "Recipient's full name",
				address: "Recipient's address",
			});
		} else {
			setPlaceholders({
				email: 'My email',
				phone_number: 'My phone number',
				name: 'My full name',
				address: 'My address',
			});
		}
	}, [isGift]);
	console.log(isGift);
	return (
		<div>
			<div className={styles.nameAndNumber}>
				<InputField className={styles.input} inputClass={loading ? styles.loading : ''} placeholder={placeholders.email} register={register('email')} />
				<InputField
					className={styles.input}
					customPrefix={
						<p className={styles.prefix_container}>
							+234 <span className={styles.prefix_divider}></span>
						</p>
					}
					type='number'
					placeholder={placeholders.phone_number}
					register={register('phone_number')}
				/>
			</div>
			<InputField className={styles.input} placeholder={placeholders.name} register={register('name')} />
			<InputField className={styles.input} placeholder={placeholders.address} register={register('address')} />
		</div>
	);
};

export default FormFields;
