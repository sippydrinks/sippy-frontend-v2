'use client';
import React from 'react';
import styles from './RecoverPassword.module.scss';
import { Button, InputField, Logo } from '@/shared';
import { useRecoverPassword } from '@/hooks';
import AuthTabHeader from '../AuthTabHeader/AuthTabHeader';

const RecoverPassword = () => {
	const { register, handleSubmit, errors, type, toggleTab } = useRecoverPassword();
	return (
		<div className={styles.recover_password_page}>
			<div className={styles.form_container}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<div className={styles.subTitle_icon}>
					<p>Oops! it happens</p>
				</div>
				<h2 className={styles.title}>Recover password</h2>
				<p className={styles.description}>
					Enter your email or phone number and we`ll send you an OTP. <br /> Enter OTP to reset your password.
				</p>
				<form action=''>
					<AuthTabHeader toggleTab={toggleTab} type={type} />
					<div className={styles.input_fields}>
						{type === 'email' && (
							<div>
								<InputField label='Email address' placeholder='Enter your email address' register={register('email')} inputClass={errors?.email && styles.error_border} />
								<p className={styles.error_styles}>{errors?.email?.message}</p>
							</div>
						)}
						{type === 'phone_number' && (
							<div>
								<InputField
									label='Phone number'
									customPrefix={
										<p className={styles.prefix_container}>
											+234 <span className={styles.prefix_divider}></span>
										</p>
									}
									register={register('phone_number')}
									inputClass={errors?.phone_number && styles.error_border}
								/>
								<p className={styles.error_styles}>{errors?.phone_number?.message}</p>
							</div>
						)}
					</div>
					<Button type='submit' buttonType='primary' className={styles.auth_btn}>
						<h3>Send OTP</h3>
					</Button>
				</form>
			</div>
		</div>
	);
};

export default RecoverPassword;
