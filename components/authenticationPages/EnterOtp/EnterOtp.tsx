'use client';
import { Button, InputField } from '@/shared';
import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import styles from './EnterOtp.module.scss';
import { useRouter } from 'next/navigation';
import RecoverPasswordWrapper from '../RecoverPasswordWrapper/RecoverPasswordWrapper';

interface InputRef {
	current: HTMLInputElement | null;
}

const EnterOtp = () => {
	let errors: string | undefined = undefined;
	const [tokens, setTokens] = useState(['', '', '', '', '', '']);

	const router = useRouter();
	const inputRefs = useRef<any[]>([]);

	// an effect that runs when the component mounts and focuses on the first input field
	useEffect(() => {
		inputRefs.current[0].focus();
	}, []);

	// a function that handles the input change and moves the focus to the next input field
	const handleInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (value.length === 1 && index < inputRefs.current.length - 1) {
			inputRefs.current[index + 1].focus();
		}
		const updatedTokens = [...tokens];
		updatedTokens[index] = value;
		setTokens(updatedTokens);
	};

	// a function that handles the login
	const handleLogin = () => {
		console.log(tokens.join(''));
		router.push('/');
	};

	const submitToken = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(tokens);
		errors = 'You have entered an invalid OTP';
	};

	const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Backspace' && index > 0 && tokens[index] === '' && inputRefs.current[index - 1]) {
			inputRefs.current[index - 1].focus();
		}
	};

	const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
		e.preventDefault();
		const pastedData = e.clipboardData.getData('text/plain').slice(0, 6);
		const newOtp = pastedData.split('').slice(0, 6);
		console.log(pastedData, newOtp);
		setTokens(newOtp);
		if (inputRefs.current[5]) {
			inputRefs.current[5].focus();
		}
	};

	return (
		<div>
			<div className={styles.otp_page_container}>
				<RecoverPasswordWrapper subTitle='Oops' title='Enter OTP' description='Enter the OTP we have sent to your email address.' />
				<form onSubmit={submitToken} className={styles.otp_form}>
					<div className={styles.input_fields}>
						<div className={styles.otp_container}>
							{tokens.map((ref, index) => (
								<InputField key={index} value={tokens[index]} type='text' inputRef={(ref: any) => (inputRefs.current[index] = ref)} maxLength={1} onChange={(e) => handleInputChange(index, e)} className={styles.otp_field} inputClass={errors && styles.input_filled} onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)} max={9} onPaste={handlePaste} />
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
						<Button type='button' buttonType='primary' className={styles.auth_btn}>
							<h3>Change email</h3>
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EnterOtp;
