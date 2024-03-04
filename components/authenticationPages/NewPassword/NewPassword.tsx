'use client';
import React from 'react';
import styles from './NewPassword.module.scss';
import { Button, InputField, Logo } from '@/shared';
import RecoverPasswordWrapper from '../RecoverPasswordWrapper/RecoverPasswordWrapper';
import useNewPassword from '@/hooks/authentication/useNewPassword';

const NewPassword = () => {
	const { register, handleSubmit, errors, submitForm } = useNewPassword();
	return (
		<div className={styles.recover_password_page}>
			<div className={styles.form_container}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<RecoverPasswordWrapper page='recoverPassword' subTitle='Oops! it happens' title='Create new password' description='Set a password thats safe and also easy for you to remember this time around, ok' />
				<form onSubmit={handleSubmit(submitForm)}>
					<div className={styles.input_fields}>
						<div>
							<InputField type='password' isPassword={true} label='Enter New Password' placeholder='Enter your new password' register={register('password')} inputClass={errors?.password && styles.error_border} />
							<p className={styles.error_styles}>{errors?.password?.message}</p>
						</div>

						<div>
							<InputField label='Confirm Password' isPassword={true} type='password' register={register('confirm_password')} inputClass={errors?.confirm_password && styles.error_border} />
							<p className={styles.error_styles}>{errors?.confirm_password?.message}</p>
						</div>
					</div>
					<Button type='submit' buttonType='primary' className={styles.auth_btn}>
						<h3>Create Password</h3>
					</Button>
				</form>
			</div>
		</div>
	);
};

export default NewPassword;
