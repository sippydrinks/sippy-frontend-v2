'use client';
import React from 'react';
import styles from './RecoverPassword.module.scss';
import { Button, InputField, Logo } from '@/shared';
import useRecoverPassword from '@/hooks/authentication/useRecoverPassword';

const RecoverPassword = () => {
	const { register, handleSubmit, errors, activeTab, toggleTab } = useRecoverPassword();
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
				<p className={styles.description}>Enter your email or phone number and we`ll send you an OTP. Enter OTP to reset your password.</p>
				<form action=''>
					<div className={styles.tabHeader_container}>
						<div className={activeTab === 1 ? styles.tab_active : styles.tab} onClick={() => toggleTab(1)}>
							<h3>Email</h3>
						</div>
						<div className={activeTab === 2 ? styles.tab_active : styles.tab} onClick={() => toggleTab(2)}>
							<h3>Phone number</h3>
						</div>
					</div>
					<div className={styles.input_fields}>
						{activeTab === 1 && (
							<div>
								<InputField label='Email address' placeholder='Enter your email address' register={register('email')} errorClass={errors?.email && styles.error_border} />
								<p className={styles.error_styles}>{errors?.email?.message}</p>
							</div>
						)}
						{activeTab === 2 && (
							<div>
								<InputField label='Phone number' prefix='+234 |' register={register('phone_number')} errorClass={errors?.phone_number && styles.error_border} />
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
