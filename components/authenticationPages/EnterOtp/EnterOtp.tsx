'use client';
import { Button, InputField } from '@/shared';
import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import styles from './EnterOtp.module.scss';
import { useRouter } from 'next/navigation';
import RecoverPasswordWrapper from '../RecoverPasswordWrapper/RecoverPasswordWrapper';
import { useRecoverPassword } from '@/hooks';

interface InputRef {
	current: HTMLInputElement | null;
}

const EnterOtp = () => {
	const { subTitle, otpError, handleInputChange, handleKeyDown, handlePaste, inputRefs, tokens, submitToken } = useRecoverPassword({});
	console.log(otpError);
	return (
		<div>
			<div className={styles.otp_page_container}>
				<RecoverPasswordWrapper subTitle={subTitle} page='otp' title='Enter OTP' description='Enter the OTP we have sent to your email address.' />
				<form onSubmit={submitToken} className={styles.otp_form}>
					<div className={styles.input_fields}>
						<div className={styles.otp_container}>
							{tokens.map((ref, index) => (
								<InputField key={index} value={tokens[index]} type='text' inputRef={(ref: any) => (inputRefs.current[index] = ref)} maxLength={1} onChange={(e) => handleInputChange(index, e)} className={styles.otp_field} inputClass={otpError && styles.input_error} onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)} max={9} onPaste={handlePaste} />
							))}
						</div>
					</div>
					<p className={styles.receive_otp}>
						You didn’t receive an OTP? <span className={styles.resend}>Resend OTP</span>
					</p>
					<div className={styles.btn_container}>
						<Button type='submit' buttonType='primary' className={styles.auth_btn}>
							<h3>Reset Password</h3>
						</Button>
						<Button type='button' buttonType='primary' className={styles.auth_btn_grey}>
							<h3>Change email</h3>
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EnterOtp;