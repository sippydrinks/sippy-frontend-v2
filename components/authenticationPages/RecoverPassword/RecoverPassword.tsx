'use client';
import React from 'react';
import { Button, InputField, Logo } from '@/shared';
import { useRecoverPassword } from '@/hooks';
import AuthTabHeader from '../AuthTabHeader/AuthTabHeader';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import RecoverPasswordWrapper from '../RecoverPasswordWrapper/RecoverPasswordWrapper';
import { AuthType } from '@/interface/authentication';
import styles from './RecoverPassword.module.scss';

const RecoverPassword = () => {
	const router = useRouter()
	const [type, toggleTab] = React.useState<AuthType>(AuthType.EMAIL);
	const { register, handleSubmit, errors, submitForm }: any = useRecoverPassword({ type });

	return (
		<div className={styles.recover_password_page}>
			<div onClick={() => router.back()} className={styles.back_to_home}>
				<div className={styles.icon}>
					<Image alt='arrow' src='/svgs/arrow_left.svg' fill />
				</div>
				<h3>Back</h3>
			</div>
			<div className={styles.form_container}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<RecoverPasswordWrapper subTitle='Oops! it happens' title='Recover password' description='Enter your email or phone number and we`ll send you an OTP. Enter OTP to reset your password.' />
				<form onSubmit={handleSubmit(submitForm)}>
					<AuthTabHeader toggleTab={toggleTab} type={type} />
					<div className={styles.input_fields}>
						{type === AuthType.EMAIL && (
							<div>
								<InputField label='Email address' placeholder='Enter your email address' register={register('email')} inputClass={errors?.email && styles.error_border} />
								<p className={styles.error_styles}>{errors?.email?.message}</p>
							</div>
						)}
						{type === AuthType.PHONE_NUMBER && (
							<div>
								<InputField
									label='Phone number'
									type='number'
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
