import React from 'react';
import styles from './FormFields.module.scss';
import { InputField } from '@/shared';
const FormFields = ({ loading, register }: any) => {
	return (
		<div>
			<div className={styles.nameAndNumber}>
				<InputField className={styles.input} inputClass={loading ? styles.loading : ''} placeholder='My email' register={register('email')} />
				<InputField
					className={styles.input}
					customPrefix={
						<p className={styles.prefix_container}>
							+234 <span className={styles.prefix_divider}></span>
						</p>
					}
					type='number'
					placeholder={`Receiver's phone number`}
					register={register('phone_number')}
				/>
			</div>
			<InputField className={styles.input} placeholder='My full name' register={register('name')} />
			<InputField className={styles.input} placeholder='My address' register={register('address')} />
		</div>
	);
};

export default FormFields;
