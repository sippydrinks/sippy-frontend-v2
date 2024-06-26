'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { AuthType, TypeProp } from '@/interface/authentication';

interface Props {
	setIsEnterOtp?: React.Dispatch<React.SetStateAction<boolean>>;
	type?: AuthType;
}

const useRecoverPassword = ({ setIsEnterOtp, type }: Props) => {
	const router = useRouter();
	const [subTitle, setSubTitle] = useState('Hurray');
	const [otpError, setOtpError] = useState<string | undefined>(undefined);
	const [tokens, setTokens] = useState(['', '', '', '', '', '']);
	const inputRefs = useRef<any[]>([]);

	const otpSchema = yup.object({
		email: type === 'email' ? yup.string().email('Invalid email address').required('Email is required') : yup.string(),
		phone_number: type === 'phone_number' ? yup.string().required('Phone number is required') : yup.string(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		resetField,
	} = useForm({
		resolver: yupResolver(otpSchema),
	});

	const submitForm = (data: any) => {
		if (setIsEnterOtp) {
			setIsEnterOtp(true);
		}
		console.log(data);
		// router.push('/');
	};

	useEffect(() => {
		resetField(type === AuthType.EMAIL ? AuthType.PHONE_NUMBER : AuthType.EMAIL);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [type]);

	// an effect that runs when the component mounts and focuses on the first input field
	useEffect(() => {
		inputRefs.current[0]?.focus();
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

	const submitToken = (e: React.FormEvent) => {
		e.preventDefault();
		// console.log(tokens);
		// setSubTitle('Oops');
		// setOtpError('Invalid OTP');
		router.push('/newPassword');
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

	return {
		register,
		handleSubmit,
		errors,
		submitForm,
		subTitle,
		otpError,
		handleInputChange,
		handleKeyDown,
		handlePaste,
		inputRefs,
		tokens,
		submitToken,
	};
};

export default useRecoverPassword;
